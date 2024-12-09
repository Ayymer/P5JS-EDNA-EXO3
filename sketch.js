function setup() {
  createCanvas(100, 100);
  angleMode(DEGREES);
}

var d = 90;
var speed = 1;

function draw() {
  background(220);
  arc(50, 50, 80, 80, 0, d, PIE);

  d = d+(sin(frameCount*1)*2);


}
