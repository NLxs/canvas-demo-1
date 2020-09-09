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
let last2;

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.fill()
}

let isTouchDevice = 'ontouchstart' in document.documentElement;
console.log(isTouchDevice);
if(isTouchDevice) {
  canvas.ontouchstart = (e)=> {
    console.log(1)
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    last2 = [x, y];
  }
  canvas.ontouchmove = (e) => {
    console.log(2)
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    drawLine(last2[0], last2[1], x, y);
    last2 = [x, y];
  }
} else {
  canvas.onmousedown = (x) => {
    painting = true;
    // 记录上次点击位置
    last = [x.clientX, x.clientY];
    console.log(last)
  }
  
  canvas.onmousemove = (e) => {
    if(painting === true) {
      drawLine(last[0], last[1], e.clientX, e.clientY);
      // 更新新的位置
      last = [e.clientX, e.clientY];
    }
  }
  
  canvas.onmouseup = () => {
    painting = false;
  }
}