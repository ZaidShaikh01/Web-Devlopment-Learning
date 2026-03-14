// Query Selector all

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

listItems[1].style.color = 'red';

listItems.forEach((items) => items.style.color = 'red');

const listItems2 = document.getElementsByClassName('item');
console.log(lsitItems2[2].innerText);
