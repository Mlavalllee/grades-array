// library of shape/fill functions

// Draw circle
function fill(Fill) {
    ctx.fillStyle = Fill
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, );
    ctx.fill();
}