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

// 移动端
/*
  bug 移动端浏览器有下拉事件
*/

let isTouchDevice = 'ontouchstart' in document.documentElement;
console.log(isTouchDevice);
if(isTouchDevice) {
  canvas.ontouchmove = (e) => {
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
} else { // PC端
  canvas.onmousedown = (e) => {
    painting = true;
    last = [e.clientX, e.clientY];
  }
  canvas.onmousemove = (e) => {
    if(painting === true) {
      console.log(last);
      drawLine(last[0], last[1], e.clientX, e.clientY);
      last = [e.clientX, e.clientY];
      // // ctx.fillRect(e.clientX -10, e.clientX -10, 20, 20); // 矩形
      // ctx.beginPath();
      // ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
      // // ctx.arc(75, 175, 150, 0, 2 * Math.PI); // 坐标 半径 (0, 2 * Math.PI)角度范围
      // ctx.stroke();
      // ctx.fill();
    } 
  }
  canvas.onmouseup = () => {
    painting = false;
  }
}

// 画线
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.fill()
}


































// canvas.onmousemove = (e) => {
//   if(painting === true) {
//     // ctx.fillRect(e.clientX -10, e.clientX -10, 20, 20); // 矩形
//     ctx.beginPath();
//     ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
//     // ctx.arc(75, 175, 150, 0, 2 * Math.PI); // 坐标 半径 (0, 2 * Math.PI)角度范围
//     ctx.stroke();
//     ctx.fill();
//   } else {
//     console.log('什么都不做');
//   }
// }


// 实现手机端
// 判断设备




// console.log(document.body.clientWidth); // 获取可视区域的宽度
// console.log(document.body.clientHeight); // 获取可视区域的宽度

/*
canvas.onmousemove = (e) => {
  // 画点
  console.log(e.clientX);
  console.log(e.clientY);

  let div = document.createElement('div'); // 创建一个div
  div.style.position = 'absolute';
  div.style.left = e.clientX + 'px';
  div.style.top = e.clientY + 'px';
  div.style.width = '20px'
  div.style.height = '20px';
  div.style.height.marginLeft = '-3px';
  div.style.marginTop = '-3px';
  div.style.backgroundColor = 'black';
  div.style.borderRadius = '50%';
  canvas.appendChild(div); // 显示到页面上
}
*/
/*
canvas.onclick = (e) => {
  // 画点
  console.log(e.clientX);
  console.log(e.clientY);

  let div = document.createElement('div'); // 创建一个div
  div.style.position = 'absolute';
  div.style.left = e.clientX + 'px';
  div.style.top = e.clientY + 'px';
  div.style.width = '20px'
  div.style.height = '20px';
  div.style.height.marginLeft = '-3px';
  div.style.marginTop = '-3px';
  div.style.backgroundColor = 'black';
  div.style.borderRadius = '50%';
  canvas.appendChild(div); // 显示到页面上
}
*/