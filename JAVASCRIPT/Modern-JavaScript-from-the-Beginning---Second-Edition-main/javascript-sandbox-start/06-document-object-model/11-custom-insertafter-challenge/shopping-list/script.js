const li = document.createElement('li');
li.textContent = 'Insert Me After'

// Exsisting element to insert after
const firstItem = document.querySelector('li:first-child')
//Our custom function

function insertAfter(newEl,existingEl){
    // const newEl = document.createElement(`${newEl}`);
    existingEl.parentElement.insertBefore(newEl,existingEl.nextSibling);
}

insertAfter(li,firstItem);