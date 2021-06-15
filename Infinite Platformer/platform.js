// platform library



function generateplatforms() {
    for (let i = 0; i < 15; i++) {
        platform.push(NewPlatform());
    }
    
}

// platform variables
function NewPlatform(InitX, InitY, InitW, InitH, InitS) {
    return {
        x: randomInt(0, 700),
        y: randomInt(0, 800),
        w: 200,
        h: 10,
        s: 1
    }
}

function DrawPlatform(APlat) {
    Fill = "#9c5a33"
    regtangle(APlat.x, APlat.y, APlat.w, APlat.h, Fill);
    regtangle(0, PlatY, 800, 100, "#9c5a33");
}

// Move Ground Down
function MoveGround() {
    PlatY += PlatV;
    if(PlatY >= 800) {
       PlatY = 900; 
    }
}

// Move platforms
function MovePlatform(APlat) {
    APlat.y += APlat.s;
    if (APlat.y >= 810) {
        APlat.y = randomInt(-147, -10);
        APlat.x = randomInt(0, 700);
    }
}

function collision(APlat) {
    //platform vairables
    let PX = APlat.x;
    let PY = APlat.y;
    let PX2 = APlat.x + 200;
    let PY2 = APlat.y + 10;
    //player vairables
    let Y2 = Y + 25;
    let X2 = X + 25;
    // collision dectection
    if(Y >= PY && Y <= PY2 && X <= PX && X >= PX2 || Y2 >= PY && Y2 <= PY2 && X2 >= PX && X2 <= PX2) {
        jump = false;
        InAir = false;
    // top of platform collision
    if(Y2 <= PY2 && X2 >= PX && X2 <= PX2) {
        V = 1;
        Y = PY - 25;
    //bottom of platform collision
     } else if (Y >= PY && X <= PX && X >= PX2) {
        Y = PY2;
        V = 1;
        console.log(1)
     }
     // side of platoform collison
    // else if () {

    // }


        // if() {

      // }
    } //  else if () {

  //  } 
    else  {
        PlatTopCollisions = false;
    }
}