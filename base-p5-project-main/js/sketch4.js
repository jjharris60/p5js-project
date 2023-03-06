let r1 = 100;
let r2 = 100;
let a1 = 0;
let a2 = 0;
let prevX;
let prevY;
let a3Inc;
let a4Inc;

function randomInteger(max) {
    //Random colour
    return Math.floor(Math.random() * (max + 1));
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(randomInteger(225), randomInteger(225), randomInteger(225));
    r1 = 300
    r2 = 300
    a3Inc = random(0, 1)
    a4Inc = random(0, 1)
}

function draw() {
    translate(width / 2, height / 2);
    stroke(randomInteger(225), randomInteger(225), randomInteger(225))
    strokeWeight(4.5)

    for (let i = 0; i < 500; i++) {
        if (i === 100) {
            break;
        }
        let x1 = r1 * cos(a1);
        let y1 = r1 * sin(a1);
        let x2 = x1 + r2 * cos(a2)
        let y2 = y1 + r2 * sin(a2)

        line(prevX, prevY, x2, y2)
        prevX = x2
        prevY = y2
        a1 += a3Inc
        a2 += a4Inc
    }
    console.log(prevX, prevY)
}