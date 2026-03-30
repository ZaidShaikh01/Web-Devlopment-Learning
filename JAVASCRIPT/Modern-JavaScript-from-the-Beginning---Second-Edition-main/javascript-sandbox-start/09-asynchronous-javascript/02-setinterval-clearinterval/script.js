// const intervalId = setInterval(myCallBack, 1000);
// function myCallBack() {
//   console.log(Date.now);
// }

let intervalId;
function startChange() {
  console.log('Start Change Clicked!');
  if (!intervalId) {
    intervalId = setInterval(changeRandomColor, 3000);
  }
}
// function changeColor() {
//   if (document.body.style.backgroundColor !== 'black') {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   } else {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//   }
// }

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}
function stopChange() {
  clearInterval(intervalId);
}
document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);
