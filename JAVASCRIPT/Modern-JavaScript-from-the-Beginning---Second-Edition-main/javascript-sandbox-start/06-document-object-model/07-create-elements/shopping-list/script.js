const div = document.createElement('div');
div.className = 'My-element';
div.id = 'My-element';
div.setAttribute('title', 'my-element');

const text = document.createTextNode('Hello world');
div.appendChild(text);

document.body.appendChild(div);

document.querySelector('ul').appendChild(div);
console.log(div);