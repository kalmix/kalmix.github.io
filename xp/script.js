let activeWindow = null;
let zIndexCounter = 10;

document.addEventListener("DOMContentLoaded", () => {
  setupWindowDragging();
  setupWindowControls();
  setupDesktopIcons();
  setupClock();
  setupNotepadMenu();
  setupCanvasGame();
});

function setupNotepadMenu() {
  const menuItems = document.querySelectorAll(".notepad-menu .menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

function setupClock() {
  const clockEl = document.getElementById("clock");
  const updateClock = () => {
    clockEl.textContent = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };
  updateClock();
  setInterval(updateClock, 1000);
}

function setupWindowDragging() {
  document.querySelectorAll(".window .title-bar").forEach((titleBar) => {
    const win = titleBar.closest(".window");
    titleBar.addEventListener("mousedown", (e) => {
      if (e.target.closest(".title-bar-controls") || win.classList.contains("maximized")) return;
      focusWindow(win);
      let x = e.clientX - win.offsetLeft, y = e.clientY - win.offsetTop;
      const move = (e) => {
        win.style.left = Math.max(0, e.clientX - x) + "px";
        win.style.top = Math.max(0, e.clientY - y) + "px";
      };
      const stop = () => {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", stop);
      };
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", stop);
    });
    win.addEventListener("mousedown", () => focusWindow(win));
  });
}

function focusWindow(win) {
  if (activeWindow === win) return;

  document.querySelectorAll(".window").forEach((w) => {
    w.classList.remove("active-window");
  });
  document.querySelectorAll(".task-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  win.classList.add("active-window");
  zIndexCounter++;
  win.style.zIndex = zIndexCounter;
  activeWindow = win;

  const taskBtn = document.getElementById(`task-${win.id}`);
  if (taskBtn) {
    taskBtn.classList.add("active");
  }
}

function setupWindowControls() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const win = btn.closest(".window");
    if (!win) return;
    
    if (btn.classList.contains("btn-minimize")) {
      win.classList.add("minimized");
      document.getElementById(`task-${win.id}`)?.classList.remove("active");
    } else if (btn.classList.contains("btn-maximize")) {
      win.classList.toggle("maximized");
    } else if (btn.classList.contains("btn-close")) {
      win.style.display = "none";
      const taskBtn = document.getElementById(`task-${win.id}`);
      if (taskBtn) taskBtn.style.display = "none";
    }
  });
}

function setupDesktopIcons() {
  const icons = [
    { id: "icon-wordpad", winId: "win-wordpad" },
    { id: "icon-wmp", winId: "win-wmp" },
    { id: "icon-paint", winId: "win-paint" },
  ];

  icons.forEach((iconData) => {
    const iconEl = document.getElementById(iconData.id);
    const winEl = document.getElementById(iconData.winId);

    iconEl.addEventListener("click", (e) => {
      e.stopPropagation();
      document
        .querySelectorAll(".desktop-icon")
        .forEach((i) => i.classList.remove("selected"));
      iconEl.classList.add("selected");
    });

    iconEl.addEventListener("dblclick", () => {
      openWindow(winEl);
    });
  });

  document.getElementById("desktop").addEventListener("click", () => {
    document
      .querySelectorAll(".desktop-icon")
      .forEach((i) => i.classList.remove("selected"));
  });
}

function openWindow(win) {
  win.style.display = "flex";
  win.classList.remove("minimized");

  const taskBtn = document.getElementById(`task-${win.id}`);
  if (taskBtn) {
    taskBtn.style.display = "flex";
  }

  focusWindow(win);
}

function toggleWindow(winId) {
  const win = document.getElementById(winId);
  if (!win) return;

  if (
    win.style.display === "none" ||
    win.classList.contains("minimized") ||
    !win.classList.contains("active-window")
  ) {
    openWindow(win);
  } else {
    win.classList.add("minimized");
    const taskBtn = document.getElementById(`task-${win.id}`);
    if (taskBtn) taskBtn.classList.remove("active");
  }
}

// Media Player
function switchWmpTab(tabName) {
  const videoTab = document.getElementById("wmp-tab-video");
  const audioTab = document.getElementById("wmp-tab-audio");
  const videoBtn = document.getElementById("tab-video-btn");
  const audioBtn = document.getElementById("tab-audio-btn");
  const wmpStatus = document.getElementById("wmp-status");

  const videoPlayer = document.getElementById("video-player");
  const audioPlayer = document.getElementById("audio-player");
  videoPlayer.pause();
  audioPlayer.pause();
  document.getElementById("wmp-disc").classList.add("paused");

  if (tabName === "video") {
    videoTab.style.display = "block";
    audioTab.style.display = "none";
    videoBtn.setAttribute("aria-selected", "true");
    audioBtn.removeAttribute("aria-selected");
    wmpStatus.textContent = "Reproductor de Video ";
  } else {
    videoTab.style.display = "none";
    audioTab.style.display = "block";
    audioBtn.setAttribute("aria-selected", "true");
    videoBtn.removeAttribute("aria-selected");
    wmpStatus.textContent = "Reproductor de Audio";
  }
}

const wmpStatus = document.getElementById("wmp-status");
const wmpDisc = document.getElementById("wmp-disc");

function bindPlayerEvents(player, typeName, isAudio) {
  player.addEventListener("play", () => {
    wmpStatus.textContent = `Reproduciendo ${typeName}...`;
    if (isAudio) wmpDisc.classList.remove("paused");
  });
  player.addEventListener("pause", () => {
    wmpStatus.textContent = "Pausado";
    if (isAudio) wmpDisc.classList.add("paused");
  });
}

const audioPlayer = document.getElementById("audio-player");
bindPlayerEvents(audioPlayer, "Audio", true);
bindPlayerEvents(document.getElementById("video-player"), "Video", false);

audioPlayer.addEventListener("ended", () => {
  wmpStatus.textContent = "Finalizado";
  wmpDisc.classList.add("paused");
});

// Canvas
function setupCanvasGame() {
  const canvas = document.getElementById("paintCanvas");
  const ctx = canvas.getContext("2d");

  let xpLogoLoaded = false;
  const xpLogoImg = new Image();
  xpLogoImg.onload = () => {
    xpLogoLoaded = true;
  };
  xpLogoImg.src = "assets/icons/png/Start Menu Icon.png";

  let animationId = null;
  let isRunning = true;
  let activeTool = "bounce";

  const logo = {
    x: 100,
    y: 100,
    vx: 3,
    vy: 2.5,
    radius: 20,
  };

  const paddle = {
    x: 200,
    y: 270,
    width: 80,
    height: 12,
    vx: 15,
  };

  window.addEventListener("keydown", (e) => {
    const paintWin = document.getElementById("win-paint");
    if (!paintWin.classList.contains("active-window")) return;

    if (e.key === "ArrowLeft" || e.key === "Left") {
      paddle.x -= paddle.vx;
      if (paddle.x < 0) paddle.x = 0;
      e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "Right") {
      paddle.x += paddle.vx;
      if (paddle.x + paddle.width > canvas.width)
        paddle.x = canvas.width - paddle.width;
      e.preventDefault();
    // } else if (e.key === "ArrowUp" || e.key === "Up") {
    //   paddle.y -= 10;
    //   if (paddle.y < 150) paddle.y = 150;
    //   e.preventDefault();
    // } else if (e.key === "ArrowDown" || e.key === "Down") {
    //   paddle.y += 10;
      if (paddle.y + paddle.height > canvas.height)
        paddle.y = canvas.height - paddle.height;
      e.preventDefault();
    }
  });

  const speedRange = document.getElementById("speed-range");
  const trailCheckbox = document.getElementById("checkbox-trail");
  const animToggleBtn = document.getElementById("btn-anim-toggle");
  const resetPosBtn = document.getElementById("btn-reset-pos");

  const toolBounceBtn = document.getElementById("btn-tool-bounce");
  const toolShapesBtn = document.getElementById("btn-tool-shapes");

  toolBounceBtn.addEventListener("click", () => {
    activeTool = "bounce";
    toolBounceBtn.classList.add("active");
    toolShapesBtn.classList.remove("active");
  });

  toolShapesBtn.addEventListener("click", () => {
    activeTool = "shapes";
    toolShapesBtn.classList.add("active");
    toolBounceBtn.classList.remove("active");
  });

  animToggleBtn.addEventListener("click", () => {
    isRunning = !isRunning;
    animToggleBtn.textContent = isRunning
      ? "Pausar Animación"
      : "Reanudar Animación";
    if (isRunning) {
      animate();
    } else {
      cancelAnimationFrame(animationId);
    }
  });

  resetPosBtn.addEventListener("click", () => {
    logo.x = canvas.width / 2;
    logo.y = 80;
    logo.vx = (parseFloat(speedRange.value) || 4) * 0.7;
    logo.vy = (parseFloat(speedRange.value) || 4) * 0.6;
    paddle.x = (canvas.width - paddle.width) / 2;
    paddle.y = 270;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  function animate() {
    if (!isRunning) return;

    if (trailCheckbox.checked) {
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    if (activeTool === "bounce") {
      if (xpLogoLoaded) {
        ctx.drawImage(
          xpLogoImg,
          logo.x - logo.radius,
          logo.y - logo.radius,
          logo.radius * 2,
          logo.radius * 2,
        );
      } else {
        ctx.beginPath();
        ctx.arc(logo.x, logo.y, logo.radius, 0, Math.PI * 2);
        ctx.fillStyle = logo.color;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
      }

      ctx.fillStyle = "#d8d0c8";
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(paddle.x, paddle.y + paddle.height);
      ctx.lineTo(paddle.x, paddle.y);
      ctx.lineTo(paddle.x + paddle.width, paddle.y);
      ctx.stroke();

      ctx.strokeStyle = "#808080";
      ctx.beginPath();
      ctx.moveTo(paddle.x + paddle.width, paddle.y);
      ctx.lineTo(paddle.x + paddle.width, paddle.y + paddle.height);
      ctx.lineTo(paddle.x, paddle.y + paddle.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.setLineDash([2, 3]);
      ctx.moveTo(logo.x, logo.y);
      ctx.lineTo(logo.x + logo.vx * 6, logo.y + logo.vy * 6);
      ctx.strokeStyle = "#808080";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.font = "11px Tahoma, Arial, sans-serif";
      ctx.fillStyle = "#000000";
      ctx.fillText(
        `Logo: X:${Math.round(logo.x)} Y:${Math.round(logo.y)}`,
        10,
        20,
      );
      ctx.fillText(`Paleta: X:${paddle.x}`, 10, 32);

      const multiplier = parseFloat(speedRange.value) / 4;
      logo.x += logo.vx * multiplier;
      logo.y += logo.vy * multiplier;

      if (logo.x - logo.radius < 0) {
        logo.x = logo.radius;
        logo.vx = -logo.vx;
      } else if (logo.x + logo.radius > canvas.width) {
        logo.x = canvas.width - logo.radius;
        logo.vx = -logo.vx;
      }

      if (logo.y - logo.radius < 0) {
        logo.y = logo.radius;
        logo.vy = -logo.vy;
      }

      if (
        logo.y + logo.radius >= paddle.y &&
        logo.y - logo.radius <= paddle.y + paddle.height &&
        logo.x + logo.radius >= paddle.x &&
        logo.x - logo.radius <= paddle.x + paddle.width
      ) {
        if (logo.vy > 0) {
          logo.y = paddle.y - logo.radius;
          logo.vy = -logo.vy;
        }
      }

      if (logo.y + logo.radius > canvas.height) {
        logo.y = canvas.height - logo.radius;
        logo.vy = -logo.vy;
      }
    } else if (activeTool === "shapes") {
      ctx.beginPath();
      ctx.arc(120, 150, 30, 0, Math.PI * 2);
      ctx.fillStyle = "#0a246a";
      ctx.fill();

      ctx.fillStyle = "#ff0000";
      ctx.fillRect(200, 120, 60, 60);

      ctx.beginPath();
      ctx.moveTo(330, 120);
      ctx.lineTo(295, 180);
      ctx.lineTo(365, 180);
      ctx.closePath();
      ctx.fillStyle = "#388e3c";
      ctx.fill();
    }

    animationId = requestAnimationFrame(animate);
  }

  animate();
}
