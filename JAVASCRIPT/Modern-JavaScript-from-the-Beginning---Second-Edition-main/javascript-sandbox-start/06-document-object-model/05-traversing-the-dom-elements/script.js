// Get child elemetn from parents
let output;
const parent = document.querySelector('.parent');
output = parent.children;

output = parent.children[1].nodeName;
parent.children[1].innerText = 'Child two';

parent.firstElementChild.innerText = 'Child One';

// Get parenet elements from child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #f00';

// Sibling elenet
const secoundElement = document.querySelector('.child:nth-child(2)');
output = secoundElement;
output = secoundElement.nextElementSibling;

secoundElement.nextElementSibling.style.color = 'green';
secoundElement.previousElementSibling.style.color = 'red';


console.log(output);
