// bouncing Ball 

//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 600;
cnv.height = 800;

// global variables
let V = 0;
 let x = 0;
 let y = 0;

//  Ball Array
let bouncingball = [];
let gravityball = [];
let bounceonmouse = [];
let gravityonmouse = [];

// Event listener / function
document.addEventListener("mousemove", MouseMovementHandler);

function MouseMovementHandler (event) {
    // get Canvas location on Window
    let cnvRect = cnv.getBoundingClientRect();
    // MousePos subtracted by CanvasPos
    x = Math.floor(event.clientX - cnvRect.left);
    y = Math.floor(event.clientY - cnvRect.top);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 69) {
        gravityball.push(NewBall());
    } else if (event.keyCode === 82) {
        gravityball.pop();
    }else if (event.keyCode === 81) {
        bouncingball.push(NewBall());
    }else if (event.keyCode === 87) {
        bouncingball.pop();
    }else if (event.keyCode == 65) {
        bounceonmouse.push(NewBallMouse(x, y, 15, 0, -11, 4));
    }else if (event.keyCode == 83) {
        bounceonmouse.pop();
    }else if (event.keyCode == 90) {
        gravityonmouse.push(NewBallMouse(x, y, 15, 0, -11, 4));
    }else if (event.keyCode == 88) {
        gravityonmouse.pop();
    }
}

// call Draw loop
requestAnimationFrame(Draw);

// Draw Balls functions
function Draw() {
    // Clear Canvas
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    // Move and Draw Balls with Gravity
    for (let i = 0; i < gravityball.length; i++) {
        GravityMoveBall(gravityball[i]);
        MoveBallSideWays(gravityball[i]);
        DrawBall(gravityball[i]);
        RemoveBall(gravityball[i]);
    }
    // Move and Draw bouncing Balls
    for (let i = 0; i < bouncingball.length; i++) {
        BouncingMoveBall(bouncingball[i]);
        DrawBall(bouncingball[i]);
    }
    // Move and Draw Bounce to mouse Balls
    for (let i = 0; i < bounceonmouse.length; i++) {
        BounceToMouse(bounceonmouse[i])
        DrawBall(bounceonmouse[i]);
    }
    // Move and Draw Gravity to mouse Balls
    V = -1;
    for (let i = 0; i < gravityonmouse.length; i++) {
        GravityToMouse(gravityonmouse[i]);
        MoveBallSideWays(gravityonmouse[i]);
        DrawBall(gravityonmouse[i]);
        V = i;
        if(V < i) {
            i--;
        }
        RemoveBallGravity(gravityonmouse[i])
    }
    requestAnimationFrame(Draw);
}

// Ball's variables
function NewBall(InitX, InitY, InitR, InitV, InitG, InitS) {
    return {
        x: randomInt(10.5, 590),
        y: 785,
        r: 15,
        v: 0,
        g: -11,
        s: 4
    }
}

function NewBallMouse(InitX, InitY, InitR, InitV, InitG, InitS) {
    return {
        x: x,
        y: y,
        r: 15,
        v: 0,
        g: -11,
        s: 4
    }
}