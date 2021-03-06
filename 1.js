let canvas = document.getElementById('canvas');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.strokeStyle = 'black';
ctx.lineWidth = 10;
ctx.lineCap = "round";

let painting = false;
let last;

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.fill()
}

canvas.onmousedown = (e) => {
  painting = true;
  last = [e.clientX, e.clientY];
}
canvas.onmousemove = (e) => {
  if(painting === true) {
    console.log(last);
    drawLine(last[0], last[1], e.clientX, e.clientY);
    last = [e.clientX, e.clientY];
  }
}
canvas.onmouseup = () => {
  painting = false;
}