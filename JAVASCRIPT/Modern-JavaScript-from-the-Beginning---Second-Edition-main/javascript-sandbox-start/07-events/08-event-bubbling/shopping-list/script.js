const button = document.querySelector('form button');

const div = document.querySelector('form div:nt-child(2)');

const form = document.querySelector('form');
button.addEventListener('click', (e) => {
  console.log('Button Was clicked');
  e.stopPropagation();
});

div.addEventListener('click', () => {
  console.log('Div was clicked');
});

form.addEventListener('click', () => {
  console.log('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Button was clicked from body');
});
