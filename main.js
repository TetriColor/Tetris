let fallStep = 25;
let rotateLeftKeyCodeW = 87;
let rotateRightKeyCodeR = 82;
let x = (canvas.width/2)-25;
let y = 0;
let w = 25;
let h = 25;
let speed = 25;

function playSpeed(){
  setInterval(function(){
  speed+=25;
  drawLine(x, y, w, h);
  }, 2000);
}

function drawLine(x, y, w, h){
  var ctxLine = canvas.getContext('2d');
  ctxLine.save();
  ctxLine.shadowBlur = 1;
  ctxLine.shadowColor = "black";
  ctxLine.fillStyle = "rgb(129, 158, 255)";
  ctxLine.fillRect(x, (y)+speed, w, h);
  ctxLine.fillRect(x, (y+25)+speed, w, h);
  ctxLine.fillRect(x, (y+50)+speed, w, h);
  ctxLine.fillRect(x, (y+75)+speed, w, h);
  ctxLine.fillRect(x, (y+100)+speed, w, h);
}

playSpeed();



function drawSquare(){
  var ctxSquare = canvas.getContext('2d');
  ctxSquare.shadowBlur = 1;
  ctxSquare.shadowColor = "black";
  ctxSquare.fillStyle = "rgb(255, 129, 129)";
  ctxSquare.fillRect(25, 25, 25, 25);
  ctxSquare.fillRect(25, 50, 25, 25);
  ctxSquare.fillRect(50, 25, 25, 25);
  ctxSquare.fillRect(50, 50, 25, 25);
}

function drawZShape(){
  var ctxZShape = canvas.getContext('2d');
  ctxZShape.shadowBlur = 1;
  ctxZShape.shadowColor = "black";
  ctxZShape.fillStyle = "rgb(255, 250, 129)";
  ctxZShape.fillRect(50, 25, 25, 25);
  ctxZShape.fillRect(50, 50, 25, 25);
  ctxZShape.fillRect(25, 50, 25, 25);
  ctxZShape.fillRect(25, 75, 25, 25);
}

function drawSShape(){
  var ctxZShape = canvas.getContext('2d');
  ctxZShape.shadowBlur = 1;
  ctxZShape.shadowColor = "black";
  ctxZShape.fillStyle = "rgb(129, 255, 157)";
  ctxZShape.fillRect(25, 25, 25, 25);
  ctxZShape.fillRect(25, 50, 25, 25);
  ctxZShape.fillRect(50, 50, 25, 25);
  ctxZShape.fillRect(50, 75, 25, 25);
}

function drawTShape(){
  var ctxZShape = canvas.getContext('2d');
  ctxZShape.shadowBlur = 1;
  ctxZShape.shadowColor = "black";
  ctxZShape.fillStyle = "rgb(215, 129, 255)";
  ctxZShape.fillRect(50, 25, 25, 25);
  ctxZShape.fillRect(25, 50, 25, 25);
  ctxZShape.fillRect(50, 50, 25, 25);
  ctxZShape.fillRect(75, 50, 25, 25);
}

function drawLShape(){
  var ctxZShape = canvas.getContext('2d');
  ctxZShape.shadowBlur = 1;
  ctxZShape.shadowColor = "black";
  ctxZShape.fillStyle = "rgb(129, 255, 232)";
  ctxZShape.fillRect(50, 25, 25, 25);
  ctxZShape.fillRect(50, 50, 25, 25);
  ctxZShape.fillRect(50, 75, 25, 25);
  ctxZShape.fillRect(25, 75, 25, 25);
}

function drawMirroredLShape(){
  var ctxZShape = canvas.getContext('2d');
  ctxZShape.shadowBlur = 1;
  ctxZShape.shadowColor = "black";
  ctxZShape.fillStyle = "rgb(255, 197, 129)";
  ctxZShape.fillRect(25, 25, 25, 25);
  ctxZShape.fillRect(25, 50, 25, 25);
  ctxZShape.fillRect(25, 75, 25, 25);
  ctxZShape.fillRect(50, 75, 25, 25);
}

// function draw() {
//   var numberShapetoDraw = (Math.floor(Math.random()*7));
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext && numberShapetoDraw === 6) {
//     drawLine(x, y, w, h);
//   } else if (canvas.getContext && numberShapetoDraw === 5) {
//     drawSquare();
//   } else if (canvas.getContext && numberShapetoDraw === 4) {
//     drawZShape();
//   } else if (canvas.getContext && numberShapetoDraw === 3) {
//     drawSShape();
//   } else if (canvas.getContext && numberShapetoDraw === 2) {
//     drawTShape();
//   } else if (canvas.getContext && numberShapetoDraw === 1) {
//     drawLShape();
//   } else if (canvas.getContext && numberShapetoDraw === 0) {
//     drawMirroredLShape();
//   }
// }
//
//
//
// draw();
