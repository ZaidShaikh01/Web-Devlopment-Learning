const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');

function addItem(e) {
  e.preventDefault();
  newItem = itemInput.value;
  //Validate Items
  if (newItem === '') {
    alert('Please Enter A Valid Item Name');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  //Adding a button with values
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  itemList.appendChild(li);
  itemInput.value = '';
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  // Create an icon
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('icon');
  icon.className = classes;
  return icon;
}
function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
}

function clearItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click',clearItems);