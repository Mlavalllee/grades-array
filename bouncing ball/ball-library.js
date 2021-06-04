// library of Ball functions

//Draw Balls
function DrawBall(ABall) {
    fill("red");
    circle(ABall.x, ABall.y, ABall.r, "fill");
}

// Balls Sideways Movement
function MoveBallSideWays(ABall) {
    if(ABall.x >= 585) {
        ABall.s = -4;
    }else if (ABall.x <= 15) {
        ABall.s = 4;
    }
    ABall.x += ABall.s;
}

// Draw Bouncing Balls
function BouncingMoveBall(ABall) {
    if (ABall.y >= 785) {
        ABall.v = -10;
    } 
    ABall.v = ABall.v + 0.1;
    ABall.y += ABall.v;
}

// Balls with Loss of energy
function GravityMoveBall(ABall) {
    if (ABall.y >= 785) {
        ABall.g = ABall.g + 1;
        ABall.v = ABall.g;

    } 
    ABall.v = ABall.v + 0.1;
    ABall.y += ABall.v;
}

function RemoveBall(ABall) {
    if (ABall.y >= 840) {
        gravityball.shift(0, 1);
    }
}

//Bounce to mouse position
function BounceToMouse(ABall) {
    if (ABall.y >= 785) {
        ABall.v = ABall.v - (ABall.v*2) - 0.1;

    } 
    ABall.v = ABall.v + 0.1;
    ABall.y += ABall.v;
}

// Energy loss to mouse position
function  GravityToMouse(ABall) {
    if (ABall.y >= 785 && ABall.y <= 800 && ABall.v > 0) {
        ABall.v = ABall.v - (ABall.v*2) - 0.1;
        ABall.v = ABall.v + 0.5;
    } else if(ABall.y >= 802 && ABall.v > 0 ) {
        ABall.v = -0;
        ABall.y = 820
    }
    ABall.v = ABall.v + 0.1;
    ABall.y += ABall.v;
}

function RemoveBallGravity(ABall) {
    if (ABall.y >= 800) {
        gravityonmouse.splice(V, 1);
    V--;
    }
}