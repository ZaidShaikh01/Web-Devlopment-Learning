const text = document.querySelector('p');
const itemLIst = document.querySelector('item-list');
const item = document.querySelectorAll('li');

function run() {
  itemLIst.classList.forEach((c) => console.log(c));
  // text.classList.add('dark');
  // text.classList.remove('card');
  // text.classList.toggle('dark');
  text.classList.replace('card', 'dark');

  // Change the style
  itemLIst.style.lineHeight = '3';

  item.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}
document.querySelector('button').onclick = run;
