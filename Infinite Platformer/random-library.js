// library of random functions

// return random decimal between low and high
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

// return random integer between low and high
function randomInt(low, high) {
    return Math.floor(Math.random()* (high - low) + low);
}