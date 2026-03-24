const itemInput = document.getElementById('item-input');
const onKeyPress = (e) => {
  console.log('keypress');
};
const onKeyUp = (e) => {
  console.log('KeyUp');
};

const onKeyDown = (e) => {
  // console.log('KeyDown');

  // Key
  console.log(e.key);
  document.querySelector('h1').innerText = e.key;
  if (e.key === 'Enter') {
    alert('You pressed enter');
  }
  // KEy code
  if (e.keyCOde === 13) {
    alert('You pressed Enter');
  }
  if (e.code === 'Digit1') {
    alert('You pressed 1');
  }

  if (e.repeat) {
    console.log('You are holding down' + e.key);
  }
  console.log('Shift: ' + e.shiftKey);
};
itemInput.addEventListener('keypress', onKeyPress);
itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
