const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items = document.querySelectorAll('li');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemFromStorage();
  itemsFromStorage.forEach((item) => addItemDom(item));
  checkUi();
}
function onAddItemSubmit(e) {
  e.preventDefault();
  newItem = itemInput.value;
  //Validate Items
  if (newItem === '') {
    alert('Please Enter A Valid Item Name');
    return;
  }

  // Check whether in Edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  }
  // Add TO DOM
  addItemDom(newItem);
  // Adding it to storage
  addItemToStorage(newItem);
  //Checking UI again

  checkUi();

  itemInput.value = '';
}

function addItemDom(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  //Adding a button with values
  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);
  //Add the LI to the DOM
  itemList.appendChild(li);
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

function addItemToStorage(item) {
  const itemsFromStorage = getItemFromStorage();

  itemsFromStorage.push(item);
  //Convert to json string
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
}
function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}
function setItemToEdit(item) {
  isEditMode = true;

  itemList.querySelectorAll('li').forEach((item) => {
    item.classList.remove('edit-mode');
  });
  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class ="fa-solid fa-pen"></i> Update Item';
  formBtn.style.backgroundColor = '#228b22';
  itemInput.value = item.textContent;
}
function removeItem(item) {
  if (confirm('Are you sure?')) {
    // Remove item form DOM
    item.remove();
    // Remove Item from local storagere
    removeItemFromStorage(item.textContent);

    checkUi();
  }
}
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemFromStorage();
  // Filter Item to ve removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  // Reset to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  // Clear form local storage
  localStorage.removeItem('items');
  checkUi();
}
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
  console.log(text);
}


function checkUi() {
  itemInput.value = ''
  const items = document.querySelectorAll('li');
  if (items.length === 0) {
    clearButton.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    itemFilter.style.display = 'block';
  }
  formBtn.innerHTML = '<i class = "fa-solid fa-plus"></i> Add Item';
  formBtn.style.backgroundColor = '#333'
  isEditMode = false;
}

function init() {
  itemForm.addEventListener('submit', onAddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearButton.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  checkUi();
}
init();
