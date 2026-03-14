function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');
  li.textContent = 'Replaced First';

  firstItem.replaceWith(li);
}

function replaceSecoundItem() {
  const secondItem = document.querySelector('li:nth-shild(2)');
  secondItem.outerHTML = '<li>Replaced Secound</li>';
}
function replaceAllItems() {
  const lis = document.querySelectorAll('li');
  lis.forEach((item, index) => {
    if (index === 1) {
      item.innerHTML = 'secound item';
    }
    item.outerHTML = '<li>Replace All</li>';
  });

  lis.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1 ? '<li>Secound Item</li>' : '<li>Replace All</li>'),
  );
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping list';
  header.replaceChild(h2, h1);
}
// Remove Elements
function removeClearButton() {
  const clearButton = document.querySelector('#clear');
  clearButton.remove();
}
function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');
  ul.removeChild(li);
}
function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`);
  ul.removeChild(li);
}
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelectorAll('li')[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}
const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber-1].remove();