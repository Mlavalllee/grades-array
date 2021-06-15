// endless platformer

// variables


//canvas setup
let cnv = document.getElementById("MyCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 800;

//array
let platform = [];

// event listeners and functions
document.addEventListener("keydown", KeyDownHandler);
document.addEventListener("keyup", KeyUpHandler);
function KeyDownHandler(event) {
    start++;
    if(start === 1 ) {
        // call loop
        requestAnimationFrame(Draw);
        generateplatforms();
    } else if(event.keyCode === 68) {
        MoveRight = true;
    } else if(event.keyCode === 87) {
        jump = true;
    }else if(event.keyCode === 65) {
        Moveleft = true
        
    }
}

function KeyUpHandler(event) {
    if(event.keyCode === 65) {
        Moveleft = false;
    } else if(event.keyCode === 68) {
        MoveRight = false;
    } else if(event.keyCode === 87) {
        jump = true;
    }
}

// Draw loop
 function Draw() {
   //Clear Canvas
   ctx.clearRect(0, 0, cnv.width, cnv.height);
    //move and draw player
    MovePlayer();
    DrawPlayer();
    //move and draw platforms
    MoveGround();
    for(i = 0; i < platform.length; i++) {
        DrawPlatform(platform[i]);
        MovePlatform(platform[i]);
        collision(platform[i]);
    }
    requestAnimationFrame(Draw);
 }

 function colission(APlat) {
    if(Y >= APlat.y && Y <= APlat.y) {
        Y = 0;
        console.log(i)
    }
 }
