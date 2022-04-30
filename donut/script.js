//donut.js code by a1k0n https://www.a1k0n.net/2011/07/20/donut-math.html

//start of donut.js
(function() {
    var _onload = function() {
        var pretag = document.getElementById("d");
        var canvastag = document.getElementById("canvasdonut");
        var tmr1 = undefined,
            tmr2 = undefined;
        var A = 1,
            B = 1;
        var asciiframe = function() {
            var b = [];
            var z = [];
            A += 0.07;
            B += 0.03;
            var cA = Math.cos(A),
                sA = Math.sin(A),
                cB = Math.cos(B),
                sB = Math.sin(B);
            for (var k = 0; k < 1760; k++) {
                b[k] = k % 80 == 79 ? "\n" : " ";
                z[k] = 0;
            }
            for (var j = 0; j < 6.28; j += 0.07) {
                var ct = Math.cos(j),
                    st = Math.sin(j);
                for (i = 0; i < 6.28; i += 0.02) {
                    var sp = Math.sin(i),
                        cp = Math.cos(i),
                        h = ct + 2,
                        D = 1 / (sp * h * sA + st * cA + 5),
                        t = sp * h * cA - st * sA;
                    var x = 0 | (40 + 30 * D * (cp * h * cB - t * sB)),
                        y = 0 | (12 + 15 * D * (cp * h * sB + t * cB)),
                        o = x + 80 * y,
                        N =
                        0 |
                        (8 *
                            ((st * sA - sp * ct * cA) * cB -
                                sp * ct * sA -
                                st * cA -
                                cp * ct * sB));
                    if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
                        z[o] = D;
                        b[o] = ".,-~:;=!*#$@" [N > 0 ? N : 0];
                    }
                }
            }
            pretag.innerHTML = b.join("");
        };
        window.anim1 = function() {
            if (tmr1 === undefined) {
                tmr1 = setInterval(asciiframe, 50);
            } else {
                clearInterval(tmr1);
                tmr1 = undefined;
            }
        };
        var R1 = 1;
        var R2 = 2;
        var K1 = 150;
        var K2 = 5;
        var canvasframe = function() {
            var ctx = canvastag.getContext("2d");
            ctx.fillStyle = "#000";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            if (tmr1 === undefined) {
                A += 0.07;
                B += 0.03;
            }
            var cA = Math.cos(A),
                sA = Math.sin(A),
                cB = Math.cos(B),
                sB = Math.sin(B);
            for (var j = 0; j < 6.28; j += 0.3) {
                var ct = Math.cos(j),
                    st = Math.sin(j);
                for (i = 0; i < 6.28; i += 0.1) {
                    var sp = Math.sin(i),
                        cp = Math.cos(i);
                    var ox = R2 + R1 * ct,
                        oy = R1 * st;
                    var x = ox * (cB * cp + sA * sB * sp) - oy * cA * sB;
                    var y = ox * (sB * cp - sA * cB * sp) + oy * cA * cB;
                    var ooz = 1 / (K2 + cA * ox * sp + sA * oy);
                    var xp = 150 + K1 * ooz * x;
                    var yp = 120 - K1 * ooz * y;
                    var L =
                        0.7 *
                        (cp * ct * sB -
                            cA * ct * sp -
                            sA * st +
                            cB * (cA * st - ct * sA * sp));
                    if (L > 0) {
                        ctx.fillStyle = "rgba(255,255,255," + L + ")";
                        ctx.fillRect(xp, yp, 1.5, 1.5);
                    }
                }
            }
        };
        window.anim2 = function() {
            if (tmr2 === undefined) {
                tmr2 = setInterval(canvasframe, 50);
            } else {
                clearInterval(tmr2);
                tmr2 = undefined;
            }
        };
        asciiframe();
        canvasframe();
    };
    if (document.all) window.attachEvent("onload", _onload);
    else window.addEventListener("load", _onload, false);
})();
//end of donut.js

//play animation button
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick() {
    const initialText = 'Spin The Donut';
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.innerHTML =
            '<span><i class="fa fa-pause icon"></i>Stop The Donut</span>';
    } else {
        btn.innerHTML =
            '<span><i class="fa fa-play icon"></i>Spin The Donut</span>';
    }
});

//make window draggable
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//dock
let icons = document.querySelectorAll(".ico");
let length = icons.length;
icons.forEach((item, index) => {
    item.addEventListener("mouseover", (e) => {
        focus(e.target, index);
    });
    item.addEventListener("mouseleave", (e) => {
        icons.forEach((item) => {
            item.style.transform = "scale(1)  translateY(0px)";
        });
    });
});

//focus animation
const focus = (elem, index) => {
    let previous = index - 1;
    let previous1 = index - 2;
    let next = index + 1;
    let next2 = index + 2;
    if (previous == -1) {
        console.log("first element");
        elem.style.transform = "scale(1.5)  translateY(-10px)";
    } else if (next == icons.length) {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        console.log("last element");
    } else {
        elem.style.transform = "scale(1.5)  translateY(-10px)";
        icons[previous].style.transform = "scale(1.2) translateY(-6px)";
        icons[previous1].style.transform = "scale(1.1)";
        icons[next].style.transform = "scale(1.2) translateY(-6px)";
        icons[next2].style.transform = "scale(1.1)";
    }
};

//jquery hide/show window onClick
$('.closebutton').on('click', function() {
    $('.window').css({
        opacity: '0',
    });
});
$('.minimizebutton').on('click', function() {
    $('.window').css({
        opacity: '0',
    });
});
$('.terminal').on('click', function() {
    var register = $('.window');
    if (register.css('opacity') === '0') {
        register.css({
            'opacity': '1'
        });
    } else {
        register.css({
            'opacity': '0'
        });
    }
});

//make sure
dragElement(document.getElementById("contact"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//hide
$('.closebutton-contact').on('click', function() {
    $('.window-contact').css({
        opacity: '0',
    });
});
$('.minimizebutton-contact').on('click', function() {
    $('.window-contact').css({
        opacity: '0',
    });
});
$('.contact-icon').on('click', function() {
    var register = $('.window-contact');
    if (register.css('opacity') === '0') {
        register.css({
            'opacity': '1'
        });
    } else {
        register.css({
            'opacity': '0'
        });
    }
});