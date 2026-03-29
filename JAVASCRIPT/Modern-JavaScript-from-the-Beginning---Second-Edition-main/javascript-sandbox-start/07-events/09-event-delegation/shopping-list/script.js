const listItems = document.querySelector('li');
const list = document.querySelector('ul');

// listItems.forEach((item) => {
//     item.addEventListener('click', (e) =>{
//         e.target.remove();
//     })
// });

list.addEventListener('click',(e) =>{
    console.log(e.currentTarget);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})
list.addEventListener('mouseover',(e) =>{
    console.log(e.currentTarget);
    if(e.target.tagName === 'LI'){
        e.target.style.color = 'red';
    }
})