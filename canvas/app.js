const colores = {
  p: '26, 115, 232',    // azul
  s: '74, 85, 104',     // gris
  t: '103, 80, 164',    // purpura
  pc: '211, 227, 253'   // azul claro
};

// Figuras basicas con rellenos y contornos
const ctxFig = canvas_figuras.getContext('2d');
function dibujarFiguras() {
  const esc = parseInt(figuras_escala.value);
  ctxFig.clearRect(0, 0, canvas_figuras.width, canvas_figuras.height);
  ctxFig.fillStyle = `rgb(${colores.p})`;
  ctxFig.fillRect(30, 40, esc * 1.5, esc);
  ctxFig.strokeStyle = `rgb(${colores.s})`;
  ctxFig.lineWidth = 4;
  ctxFig.strokeRect(210, 40, esc * 1.5, esc);
  
  ctxFig.beginPath();
  ctxFig.arc(95, 160, esc / 2, 0, Math.PI * 2);
  ctxFig.fillStyle = `rgb(${colores.t})`;
  ctxFig.fill();
  
  ctxFig.beginPath();
  ctxFig.arc(265, 160, esc / 2, 0, Math.PI * 2);
  ctxFig.strokeStyle = `rgb(${colores.p})`;
  ctxFig.stroke();
}
figuras_escala.addEventListener('input', dibujarFiguras);

// Caminos y poligonos cerrados
const ctxCam = canvas_caminos.getContext('2d');
function dibujarPoligono() {
  const n = parseInt(caminos_lados.value);
  caminos_lados_valor.textContent = n;
  ctxCam.clearRect(0, 0, canvas_caminos.width, canvas_caminos.height);
  ctxCam.beginPath();
  for (let i = 0; i <= n; i++) {
    const ang = (i * 2 * Math.PI) / n - Math.PI / 2;
    const x = 180 + 70 * Math.cos(ang);
    const y = 110 + 70 * Math.sin(ang);
    if (i === 0) ctxCam.moveTo(x, y);
    else ctxCam.lineTo(x, y);
  }
  ctxCam.closePath();
  ctxCam.fillStyle = `rgb(${colores.pc})`;
  ctxCam.fill();
  ctxCam.strokeStyle = `rgb(${colores.p})`;
  ctxCam.lineWidth = 5;
  ctxCam.stroke();
}
caminos_lados.addEventListener('input', dibujarPoligono);

// Curvas Bezier y cuadraticas
const ctxCur = canvas_curvas.getContext('2d');
function dibujarCurvas() {
  const ten = parseInt(curvas_tension.value);
  ctxCur.clearRect(0, 0, canvas_curvas.width, canvas_curvas.height);
  
  ctxCur.beginPath();
  ctxCur.moveTo(40, 150);
  ctxCur.quadraticCurveTo(180, 150 - ten, 320, 150);
  ctxCur.strokeStyle = `rgb(${colores.p})`;
  ctxCur.lineWidth = 5;
  ctxCur.stroke();
  
  ctxCur.beginPath();
  ctxCur.moveTo(40, 70);
  ctxCur.bezierCurveTo(100, 70 + ten, 260, 70 - ten, 320, 70);
  ctxCur.strokeStyle = `rgb(${colores.t})`;
  ctxCur.stroke();
  
  ctxCur.fillStyle = `rgb(${colores.s})`;
  ctxCur.font = '12px "Google Sans Text"';
  ctxCur.fillText('Curva Bezier', 240, 50);
  ctxCur.fillText('Curva Cuadratica', 245, 135);
}
curvas_tension.addEventListener('input', dibujarCurvas);

// Mezclas de color y transparencias
const ctxCol = canvas_colores.getContext('2d');
function dibujarColores() {
  const alf = colores_alfa.value / 100;
  colores_alfa_valor.textContent = alf.toFixed(1);
  ctxCol.clearRect(0, 0, canvas_colores.width, canvas_colores.height);
  ctxCol.fillStyle = `rgb(${colores.p})`;
  ctxCol.fillRect(40, 40, 120, 120);
  ctxCol.fillStyle = `rgba(${colores.t}, ${alf})`;
  ctxCol.fillRect(100, 70, 120, 120);
  ctxCol.fillStyle = `rgba(${colores.s}, ${alf})`;
  ctxCol.fillRect(160, 100, 120, 120);
}
colores_alfa.addEventListener('input', dibujarColores);

// Degradados y transiciones de color
const ctxDeg = canvas_degradados.getContext('2d');
function dibujarDegradados() {
  ctxDeg.clearRect(0, 0, canvas_degradados.width, canvas_degradados.height);
  let grad;
  
  if (chip_linear.selected) {
    grad = ctxDeg.createLinearGradient(30, 30, 330, 190);
    grad.addColorStop(0, 'rgba(63, 94, 251, 1)');
    grad.addColorStop(1, 'rgba(252, 70, 107, 1)');
    ctxDeg.fillStyle = grad;
    ctxDeg.fillRect(30, 30, 300, 160);
  } else if (chip_radial.selected) {
    grad = ctxDeg.createRadialGradient(180, 110, 0, 180, 110, 80);
    grad.addColorStop(0, 'rgba(63, 94, 251, 1)');
    grad.addColorStop(1, 'rgba(252, 70, 107, 1)');
    ctxDeg.fillStyle = grad;
    ctxDeg.beginPath();
    ctxDeg.arc(180, 110, 80, 0, Math.PI * 2);
    ctxDeg.fill();
  } else if (chip_conic.selected) {
    grad = ctxDeg.createConicGradient(0, 180, 110);
    grad.addColorStop(0, 'rgba(63, 94, 251, 1)');
    grad.addColorStop(0.5, 'rgba(252, 70, 107, 1)');
    grad.addColorStop(1, 'rgba(63, 94, 251, 1)');
    ctxDeg.fillStyle = grad;
    ctxDeg.beginPath();
    ctxDeg.arc(180, 110, 80, 0, Math.PI * 2);
    ctxDeg.fill();
  }
}

function cambiarTipoDegradado(tipo) {
  chip_linear.selected = (tipo === 'linear');
  chip_radial.selected = (tipo === 'radial');
  chip_conic.selected = (tipo === 'conic');
  dibujarDegradados();
}

chip_linear.addEventListener('click', () => cambiarTipoDegradado('linear'));
chip_radial.addEventListener('click', () => cambiarTipoDegradado('radial'));
chip_conic.addEventListener('click', () => cambiarTipoDegradado('conic'));

// Tipos de uniones de trazados
const ctxUni = canvas_uniones.getContext('2d');
function dibujarUniones() {
  const gr = parseInt(uniones_grosor.value);
  ctxUni.clearRect(0, 0, canvas_uniones.width, canvas_uniones.height);
  ctxUni.lineWidth = gr;
  ctxUni.strokeStyle = `rgb(${colores.p})`;
  ['miter', 'round', 'bevel'].forEach((tipo, idx) => {
    ctxUni.lineJoin = tipo;
    ctxUni.beginPath();
    const x = idx * 100 + 40;
    ctxUni.moveTo(x, 50);
    ctxUni.lineTo(x + 40, 160);
    ctxUni.lineTo(x + 80, 50);
    ctxUni.stroke();
    ctxUni.fillStyle = `rgb(${colores.s})`;
    ctxUni.font = '12px "Google Sans Text"';
    ctxUni.fillText(tipo, x + 25, 195);
  });
}
uniones_grosor.addEventListener('input', dibujarUniones);

// Bucle de animacion y cambio de color con temporizador
const ctxAni = canvas_animacion.getContext('2d');
let animando = true, ang = 0, color = `rgb(${colores.p})`, contadorTimeout = 0;
const coloresAni = [colores.p, colores.t, '230, 81, 0', '0, 176, 255'].map(c => `rgb(${c})`);

function bucle() {
  if (!animando) return;
  ctxAni.clearRect(0, 0, canvas_animacion.width, canvas_animacion.height);
  
  ctxAni.beginPath();
  ctxAni.arc(180, 110, 60, 0, Math.PI * 2);
  ctxAni.strokeStyle = '#c1c7cd';
  ctxAni.stroke();
  
  ctxAni.beginPath();
  ctxAni.arc(180, 110, 18, 0, Math.PI * 2);
  ctxAni.fillStyle = '#ffeb3b';
  ctxAni.fill();
  
  ctxAni.beginPath();
  ctxAni.arc(180 + 60 * Math.cos(ang), 110 + 60 * Math.sin(ang), 12, 0, Math.PI * 2);
  ctxAni.fillStyle = color;
  ctxAni.fill();
  ctxAni.strokeStyle = '#ffffff';
  ctxAni.stroke();
  
  ang += 0.03;
  requestAnimationFrame(bucle);
}

function cambiarColor() {
  if (!animando) return;
  color = coloresAni[(coloresAni.indexOf(color) + 1) % coloresAni.length];
  contadorTimeout++;
  txt_estado_tiempo.textContent = `setTimeout Count: ${contadorTimeout}`;
  setTimeout(cambiarColor, 2500);
}

btn_animacion.onclick = () => {
  animando = !animando;
  btn_animacion.textContent = animando ? 'Pausar' : 'Reanudar';
  btn_animacion.className = animando ? '' : 'md-btn--tonal';
  if (animando) { bucle(); setTimeout(cambiarColor, 2500); }
};

function iniciar() {
  dibujarFiguras();
  dibujarPoligono();
  dibujarCurvas();
  dibujarColores();
  dibujarDegradados();
  dibujarUniones();
  bucle();
  setTimeout(cambiarColor, 2500);
}

window.onload = () => {
  iniciar();
  document.fonts?.ready.then(() => { dibujarCurvas(); dibujarUniones(); });
};
