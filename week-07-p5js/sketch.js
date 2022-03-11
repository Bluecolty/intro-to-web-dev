/* artboard 1 */

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('artboard-two');
}

function draw() {
    background(150);
    circle(200, 200, 300);
    rect(100, 100, 200, 200);

}

/* artboard 2 */

function setup() {
    let canvas = createCanvas(400, 400);
  canvas.parent('artboard-one');
}

function draw() {
    background(0, 200, 0);

    fill(255, 128, 0);
    circle(75, 75, 150);
    circle(225, 75, 150);
    circle(75, 225, 150);
    circle(225, 225, 150);

    fill(255, 0, 0);
    circle(150, 150, 150);
}

/* artboard 3 */

function setup() {
    let canvas = createCanvas(400, 400);
  canvas.parent('artboard-three');
}

function draw() {
    circle(mouseX, mouseY, 50);

    let xLabel = document.getElementById('x-label');
    xLabel.innerText = 'X: ' + mouseX;

    let yLabel = document.getElementById('y-label');
    yLabel.innerText = 'Y: ' + mouseY;
}

/* artboard 4 */

function setup() {
    let canvas = createCanvas(400, 400);
  canvas.parent('artboard-four');
}

function draw() {
  if (keyIsPressed) {

    if (key == 'r') {
      background(255, 0, 0);
    } 
    else if (key == 'g') {
      background(0, 255, 0);
    } 
    else if (key == 'b') {
      background(0, 0, 255);
    }
  } 
  else {
    background(32);
  }
}

function draw(){
  background(32);
  
  fill(255);
  textSize(144);
  text(key, 110, 180);
}

/* artboard 5 */

