let canvas = document.getElementById('canvas')
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