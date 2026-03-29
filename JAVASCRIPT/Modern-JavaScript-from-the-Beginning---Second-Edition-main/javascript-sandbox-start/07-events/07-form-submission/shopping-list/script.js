const form = document.getElementById('item-form');
function onSubmit(e) {
  e.preventDefault();
  console.log('submit');
  const item = document.getElementById('item-input').value;
  const priotity = document.getElementById('priority-input').value;

  if (item === '' || priotity === 0) {
    alert('Please fill in all fields');
    return;
  }
  console.log(item, priotity);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);

  const item = formData.get('item'); // this is name, the placeholder inside is the name
  const priority = formData.get('priotiy');
  const entries = formData.entries();

  console.log(entries);

  for(let entry of entries){
    console.log(entry);
  }
  console.log(item, priority);

  console.log(formData);
}

form.addEventListener('submit', onSubmit2);
