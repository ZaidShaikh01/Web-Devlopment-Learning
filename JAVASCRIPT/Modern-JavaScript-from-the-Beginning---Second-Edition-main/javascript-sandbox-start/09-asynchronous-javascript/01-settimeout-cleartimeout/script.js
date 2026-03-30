setTimeout(function () {
  console.log('object');
}, 2000);
function changeText() {
  document.querySelector('h1').textContent = 'Hello From Callback';
}
console.log('Hello from global scope');

const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  clearTimeout(timerId);
});
