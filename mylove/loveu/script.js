function setRandomCharSet(length) {
	let result = " ";
	const characters =
		"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~i!lI;:,\"^`'.";
	const charactersLength = characters.length;
	let counter = 1;

	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

let fontColor = "#df2080";
let charSet = setRandomCharSet(10);

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "https://assets.codepen.io/108082/valentine3-a.png";
image.crossOrigin = "Anonymous";

const imageSize = {
	width: 0,
	height: 0
};

const setViewport = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	imageSize.width = canvas.width;
	imageSize.height = canvas.width / 2.216867;
};

var loop = function () {
	render();
	window.requestAnimationFrame(loop);
};

const render = function () {
	ctx.drawImage(image, 0, 0, imageSize.width / 8, imageSize.height / 7);
	const imageData = ctx.getImageData(0, 0, imageSize.width, imageSize.height);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	let strChars = getAsciiString(imageData.data, "");
	drawText(strChars);
};

setViewport();
loop();

window.addEventListener("resize", () => {
	setViewport();
	render();
});

canvas.addEventListener("mousemove", () => {
	charSet = setRandomCharSet(10)
	const random = Math.random() * 16777215;
	fontColor = `hsl(${360 * random}, 100%, 58%)`;
});

/**
 * 1st position is the Red value
 * 2nd position is the Green value
 * 3rd position is the Blue value
 * 4th position is the Alpha value
 * https://github.com/mrdoob/three.js/blob/dev/examples/jsm/effects/AsciiEffect.js
 */
function getAsciiString(data, strChars) {
	for (let y = 0; y < imageSize.height; y += 2) {
		for (let x = 0; x < imageSize.width; x += 1) {
			const offset = (y * imageSize.width + x) * 4;

			const red = data[offset];
			const green = data[offset + 1];
			const blue = data[offset + 2];
			const alpha = data[offset + 3];
			
			let brightness = (0.3 * red + 0.6 * green + 0.1 * blue) / 255;

			if (alpha == 0) {
				brightness = 1;
			}

			const charIdx = Math.floor((1 - brightness) * (charSet.length - 1));

			let char = charSet[charIdx];
			if (char === undefined) char = " ";

			strChars += char;
		}
		strChars += "\n";
	}

	return strChars;
}

function drawText(text) {
	const ratio = 13 / canvas.width;
	const fontSize = canvas.width * ratio;
	let textLines = text.split("\n");
	ctx.fillStyle = fontColor;
	ctx.font = `${fontSize}px Courier, monospace`;
	ctx.shadowColor = fontColor;
	ctx.shadowBlur = 10;
	
	const lineheight = fontSize;
	const x = canvas.width / 2 - imageSize.width / 2.05;
	const y = canvas.height / 2 - imageSize.height / 2.3;
	
	for (let i = 0; i < textLines.length; i += 1) {
		ctx.fillText(textLines[i], x, y + i * lineheight);
	}
	
	ctx.shadowBlur = 0;
}

let highestZ = 1;
class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;
  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;
      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }
      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })
    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return;
      this.holdingPaper = true;
      paper.style.zIndex = highestZ;
      highestZ += 1;
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}
const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});