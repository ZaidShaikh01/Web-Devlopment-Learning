const { createElement } = require("react");

// Quick and dirty way
function createListItem(item){
    const li = document.createElement('li');
    li.innerHtml = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
    document.querySelector('.items').appendChild(li);
}
//Clean & performat
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'Remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    button.appendChild(icon);
    li.append(button);

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');