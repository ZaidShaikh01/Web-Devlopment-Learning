// Javascrpt even listener

const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function (){
//     alert('Clear Items');
// }

// Add event listener
function onClear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
    items.forEach((item) => item.remove());

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.addEventListener('click', () => alert('Clear Items'));

setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

setTimeout(() => clearBtn.click(), 5000);
