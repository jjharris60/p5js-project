let x = 0;
let y = 0;
let amplitude;
let maxAngle;
let frequency;
let inc = 0.05;
let offset = 0; // the amount offset from the beginnnijg of the sine wave
let theta = 0;
function setup() {
    amplitude = windowHeight / 3;
    frequency = windowWidth / 3;
    maxAngle = (windowWidth / frequency) * TWO_PI
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(0);
    noStroke();
    let length = 20;
    while (theta < maxAngle + offset) {
        amplitude = sin(theta - offset) * (windowHeight / 2)
        amplitude = ((theta - offset) / maxAngle) * (windowHeight / 2)
        for (i = length; i > 0; i--) {
            // sine wave
            y = sin(theta - (i * 0.05)) * amplitude;
            fill(230 - (255 / length * i), 40, 30);
            square(x, y + height * 0.5, 16);
        }
        for (i = length; i > 0; i--) {
            // sine wave
            y = cos(theta - (i * 0.05)) * amplitude;
            fill(150 - (255 / length * i), 40, 30);
            square(x, y + height * 0.3, 16);
        }
        theta += 0.2
        x = ((theta - offset) / maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}
