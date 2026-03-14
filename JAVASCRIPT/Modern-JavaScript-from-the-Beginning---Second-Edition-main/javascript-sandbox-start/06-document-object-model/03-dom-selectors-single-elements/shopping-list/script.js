// DOcument.getElementById()
console.log(document.getElementById('app-title'));
// Document get attributes on the current eleemnt
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attribute
document.getElementById('app-title').title = 'new-id';
document.getElementById('app-title').setAttribute('class', 'title');
const title = document.getElementById('app-title');

// Get /chage content
console.log(title.textContent);
title.textContent = 'Hello world';
title.innerText = 'Hello again';
title.innerHTML = '<strong> Shopping List</strong>';

// Change styles

title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '4px';

// querySelector
console.log(document.querySelector('h1')); //gonna select only the first one

const secoundItem = document.querySelector('li:nth-child(2)');
secoundItem.innerText = 'Apple Juice';
secoundItem.style.color = 'aqua';

// Use these methods on oter elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
