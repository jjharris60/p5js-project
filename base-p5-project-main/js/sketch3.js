let radius1;
let angle;
let step;
let state1;
let state2;
let state3;
function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255, 133, 87);
    noFill()
    noStroke()
    r = 250
    angle = 0
    step = TWO_PI / 20
}


function draw() {
    translate(windowWidth / 2, windowHeight / 2);
    // centre ellipse
    let x = r * sin(angle);
    let y = r * cos(angle);
    state1 = [ellipse(0, 0, 500), stroke(226, 13, 116), strokeWeight(1.3)]
    state2 = [ellipse(x, y, 200), stroke(226, 13, 116), strokeWeight(2.5)]
    state3 = [ellipse(x, y, 700), stroke(226, 13, 116), strokeWeight(3.2)]
    // initialising variables
    // converting coordinates

    ellipse(x, y, 700);
    stroke(226, 13, 116);
}
