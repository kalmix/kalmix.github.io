var colores = "black";
function colorChange(code) {
    if (code == 1) {
        colores = "red";
    } else if (code == 2) {
        colores = "blue";
    } else if (code == 3) {
        colores = "yellow";
    } else if (code == 4) {
        colores = "black";
    }
}

const $ = (s, o = document) => o.querySelector(s);

document.addEventListener('mousemove', function (e) {
    $('.cursor').style.left = (e.pageX - 25) + 'px';
    $('.cursor').style.top = (e.pageY - 25) + 'px';
});

const CANVAS_WIDTH = screen.width
const CANVAS_HEIGHT = screen.height

let size = 1
let minsize
let fibonacci = [1, 1]

const colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff']

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    angleMode(DEGREES)
    initfibonacci()
    setMinsize()
}

let i = 0;
function stopAnimation() {
    a = document.getElementById('stop');
    if (i == 0) {
        noLoop();
        a.innerHTML = 'Start Animation<span class="material-symbols-outlined">play_circle</span>';
        i = 1;
    } else {
        loop();
        a.innerHTML = 'Stop Animation<span class="material-symbols-outlined">pause_circle</span>';
        i = 0;
    }
}

function draw() {
    translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
    f = document.getElementById('frame');
    f.innerHTML = 'Frame: ' + frameCount;

    var slide = document.getElementById('slide');
    slide.onchange = function () {
        var v = document
            .getElementById('slide')
            .value;
        b = parseInt(v)
        frameRate(b)
        fps = document.getElementById('fps');
        fps.innerHTML = 'FPS: ' + b;
    }

    var intAngularity = document
        .getElementById('angularity')
        .value
    var cIa = document.getElementById('angularity');
    Angularity = parseInt(intAngularity)

    cIa.onchange = function () {
        VoA = document.getElementById('angularityAmount');
        VoA.innerHTML = 'Angularity: ' + Angularity;
    }
    console.log(Angularity)

    for (let i = 0; i < fibonacci.length; i++) {
        const sFibonacci = fibonacci[i] * size
        const color = colors[i % 4]
        fill("color")

        stroke(colores)
        rect(0, 0, sFibonacci, sFibonacci)
        arc(sFibonacci, 0, 2 * sFibonacci, 2 * sFibonacci, 90, 180)
        translate(sFibonacci, sFibonacci)
        rotate(Angularity)
        console.log(Angularity)
    }

    if (size <= minsize) {
        fibonacci = [1, 1]
        initfibonacci()
        size = 1
    } else {
        size *= 0.99
    }
}

function addFib() {
    const lenghtFib = fibonacci.length

    fibonacci.push(fibonacci[lenghtFib - 1] + fibonacci[lenghtFib - 2])
}

function initfibonacci() {
    for (let i = 0; i < 25; i++) {
        addFib()
    }
}

function setMinsize() {
    const lenghtFib = fibonacci.length

    minsize = fibonacci[lenghtFib - 5] / fibonacci[lenghtFib - 1]
}

console.log(CANVAS_WIDTH, CANVAS_HEIGHT)

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document
            .documentElement
            .requestFullscreen()
        document
            .getElementById('btn')
            .innerHTML = 'Exit Fullscreen<span class="material-symbols-outlined">fullscreen_exit</span>';
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen()
            document
                .getElementById('btn')
                .innerHTML = 'Fullscreen<span class="material-symbols-outlined">fullscreen</span>';
        }
    }
}
