// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     noStroke();
// }

// function draw() {
//     background(0);
//     let s = map(mouseX, 0, width, 0, 175);
//     let d = map(mouseX, 0, width, 40, 300);
//     let e = map(mouseX, 0, width, 80, 2000);
//     fill(255, s, 0);
//     ellipse(width / 2, height / 2, d, d);
//     ellipse(width / 2, height / 2, e, e);
// }

function setup() {
    createCanvas(windowWidth, windowHeight)
}

let t = 0
function draw() {
    background(5, 5, 5);
    translate(width / 2, height / 2)
    stroke(25 + (mouseX / width) * 200, 70 + (mouseY / height) * 200, 120 + (mouseY / height) * 200);
    strokeWeight(1.5);
    for (let i = 0; i < 500; i++) {
        line(x1(t + i), y1(t + i), x2(t + i) + 20, y2(t + i) + 20)
    }
    t += 0.15;
}

// function to change initial x co-ordinate of the line
function x1(t) {
    return sin(t / 50) * 300 + sin(t / 20) * 125 + sin(t / 30) * mouseX;
}

// function to change initial y co-ordinate of the line
function y1(t) {
    return cos(t / 10) * 300 + cos(t / 20) * 125 + cos(t / 30) * mouseY;
}

// function to change final x co-ordinate of the line
function x2(t) {
    return sin(t / 15) * 300 + sin(t / 25) * 125 + sin(t / 35) * mouseX;
}

// function to change final y co-ordinate of the line
function y2(t) {
    return cos(t / 15) * 300 + cos(t / 25) * 125 + cos(t / 35) * mouseY;
}