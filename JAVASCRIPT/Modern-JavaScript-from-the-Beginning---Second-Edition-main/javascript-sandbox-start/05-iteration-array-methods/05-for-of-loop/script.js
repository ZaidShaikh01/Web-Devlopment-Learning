const items = ['books', 'tables', 'chair', 'kite'];

const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];
// For ...of loop
for (const item of items) {
  console.log(item);
}
// Loop over string
const str = 'hello world';
for (const letter of str) {
  console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name','john')
map.set('age',30)

for(const [key,value] of map){
    console.log(key,value);
}