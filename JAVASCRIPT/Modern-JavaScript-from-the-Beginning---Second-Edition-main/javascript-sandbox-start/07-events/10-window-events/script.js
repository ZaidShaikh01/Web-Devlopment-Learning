// window.onload = function(){
//     document.querySelector('h1').textContent = 'Hello World';
// }
window.addEventListener('load', () => {
  document.querySelector('h1').textContent = 'Hello World';
});

// Dom content load

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').textContent = 'Hello World';
});

// Defer attribute can be used to load the content afterwards

window.addEventListener('resize', () => {
  document.querySelector('h1').innerText =
    `Resized to ${window.innerWidth} X ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);

  if (window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
  }
});

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'purple';
  });
});
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'blue';
  });
});
