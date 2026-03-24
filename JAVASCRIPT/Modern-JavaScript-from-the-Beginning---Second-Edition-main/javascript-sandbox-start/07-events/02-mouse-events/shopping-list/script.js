const logo = document.querySelector('img');

const onClick = () => console.log('object');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};
const onRightClick = () => console.log('On right clicke');
const onMouseDown = () => console.log('mouse down');
const onMouseUp = () => console.log('mouse up');
const onMouseWheel = () => console.log('Mouse wheel');
const onMouseOut = () => console.log('Mouse out');
const onMouseOver = () => console.log('Mouse over');
const onDragStart = () => console.log('Drag Start');
const onDrag = () => console.log('Drag');
const onDragEnd = () => console.log('Drag End');

// Even Listeners
log.addEventListener('click', onClick);
logo.addEventListener('dblClick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown); // When u hold a key
logo.addEventListener('mouseup', onMouseDown); // when u release the key that you were holding

logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover',onMouseOver);
logo.addEventListener('mouseout',onMouseOut)

logo.addEventListener('dragstart',onDragStart);
logo.addEventListener('drag',onDrag);
logo.addEventListener('dragend',onDragEnd);
