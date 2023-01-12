let r1 = 100;
let r2 = 100;
let a1 = 0;
let a2 = 0;
let prevX;
let prevY;
let a3Inc;
let a4Inc;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(255, 133, 87);
    r1 = random(100, 300)
    r2 = random(100, 300)
    a3Inc = random(0, 1, 5)
    a4Inc = random(0, 1, 5)
}

function draw() {
    translate(width / 2, height / 2);
    stroke('white')
    strokeWeight(4.5)

    for (let i = 0; i < 5; i++) {
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

}