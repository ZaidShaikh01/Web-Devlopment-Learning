/*
Add Tasks
Remove Tasks
Delete Tasks
*/
const overlay = document.querySelector('.overlay');
const addContainer = document.querySelector('.add-container');
const SearchInput = document.querySelector('.search-input');
const addInput = document.querySelector('.add-input');
const cancelButton = document.getElementById('cancel');
const applyButton = document.getElementById('apply');
const itemlist = document.querySelector('.note-list');

const todoList = [];
const removeOverlay = () => {
  addInput.value = '';
  overlay.classList.remove('show');
  addContainer.classList.remove('show');
};
function listItems() {
  itemlist.innerHTML = ``;
  let todoList = JSON.parse(localStorage.getItem('todo')) || [];
  todoList.forEach((list) => {
    const li = document.createElement('li');
    li.classList.add('note-entry');
    li.innerHTML = `
                <form class="note-checkbox">
                  <input type="checkbox" name="todo" id="todo" />
                  <label for="todo">${list.task}</label>
                </form>
                <div class="note-buttons">
                  <button class="form-btn edit">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button class="form-btn remove">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              `;
    itemlist.appendChild(li);
  });
}
function addElementToLocalStorage() {
  let todoList = JSON.parse(localStorage.getItem('todo')) || [];
  let newTodo = {
    task: addInput.value,
    completed: false,
  };
  todoList.push(newTodo);
  localStorage.setItem('todo', JSON.stringify(todoList));
  listItems();
}
function removeItem(e) {
  const noteEntry = e.target.parentElement.parentElement.parentElement;
  const textContent = noteEntry.querySelector('label').textContent;

  if (e.target.parentElement.classList.contains('remove')) {
    console.log('Remove Clicked');
    e.target.parentElement.parentElement.parentElement.remove();
    let todoList = JSON.parse(localStorage.getItem('todo')) || [];
    todoList = todoList.filter((todo) => todo.task !== textContent);
    localStorage.setItem('todo', JSON.stringify(todoList));
  }
}

function init() {
  listItems();
  cancelButton.addEventListener('click', () => {
    console.log('Cancel Cliked!');
    removeOverlay();
  });
  applyButton.addEventListener('click', () => {
    console.log('Apply Clicked!');
    addElementToLocalStorage();
    removeOverlay();
  });
  addInput.addEventListener('input', () => {
    console.log(addInput.value);
  });

  document
    .querySelector('.floating-action-button')
    .addEventListener('click', () => {
      overlay.classList.toggle('show');
      addContainer.classList.toggle('show');
    });
  itemlist.addEventListener('click', removeItem);
}
document.addEventListener('DOMContentLoaded', init);
