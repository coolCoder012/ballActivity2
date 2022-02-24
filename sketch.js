var ball = {
  x: 69,
  y: 169,
  radius: 25,
  xSpeed: 0,
  ySpeed: 0,
  color: ["deepskyblue", "red", "limegreen"]
}



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x, ball.y, ball.radius)
  fill(ball.color[0]);
  ball.xSpeed = 2;
  ball.x += ball.xSpeed
}