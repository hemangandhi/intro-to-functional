(function () {
var canvas, context;
var startTime, timerSpan;
var won = false;

window.addEventListener("load", function () {
    canvas = document.getElementById("game");
    context = canvas.getContext("2d");

    startTime = (new Date()).getTime();
    timerSpan = document.getElementById("timer");

    runFrame();
});

let keys = {
    left: false,
    down: false,
    right: false,
    up: false
};

let gameState = myInitialState;

function runFrame() {
    requestAnimationFrame(function () {
        frame()
        runFrame();
    });
}

function padTimeMin(m) {
    let t = m.toString(10);
    if ( t.length < 2 ) t = "0" + m;
    return t;
}

function padTimeSec(s) {
    let t = s.toString(10);
    if (t.length<3 || t[t.length-2] != ".") t += ".0";
    if (t.length<4) t = "0" + t;
    return t;
}

function frame() {
    if (won) return;

    let timeDiff = ((new Date()).getTime() - startTime)/1000;
    timerSpan.innerHTML = "(" + padTimeMin(Math.floor(timeDiff/60)) + ":" + padTimeSec(Math.floor(10*(timeDiff%60))/10) + ")";

    gameState = myBallHandler(keys, gameState, Math.random());

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.fillStyle = 'white';
    context.fillRect(0,0,window.innerWidth, window.innerHeight);

    context.fillStyle = 'black';
    context.fillRect(window.innerWidth * (gameState.playerX/4 + 0.5) - 15, window.innerHeight * (-gameState.playerY/4 + 0.5) - 15, 30, 30);
    context.strokeRect(window.innerWidth * 0.25, window.innerHeight * 0.25, window.innerWidth * 0.5, window.innerHeight * 0.5);

    if ( gameState.playerX > 1 || gameState.playerY > 1 || gameState.playerX < -1 || gameState.playerY < -1 ) {
        won = true;
    }
}

function onKeyDown(evt) {
    switch (evt.keyCode) {
        case 37: keys.left  = true; return;
        case 40: keys.down  = true; return;
        case 39: keys.right = true; return;
        case 38: keys.up    = true; return;
    }
}
window.addEventListener("keydown", onKeyDown);

function onKeyUp(evt) {
    switch (evt.keyCode) {
        case 37: keys.left  = false; return;
        case 40: keys.down  = false; return;
        case 39: keys.right = false; return;
        case 38: keys.up    = false; return;
    }
}
window.addEventListener("keyup", onKeyUp);

})();
