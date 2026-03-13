const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberrie', 'blueberry', 'raseberry'];

x = fruits[3][1];
const allFruits = [fruits, berries];

x = allFruits;

// Concat operations
x = fruits.concat(berries); // It will concat everything from fuits and everything from berries

// Spread operator (...)
x = [...fruits,...berries]; // It take item from both arrays
// Flatten arrays
const arr = [1,2,[3,4],5,[6,7],8];
x = arr.flat(); // gives us 1D array
x = Array.isArray('Hello');
x = Array.from('12345'); // Gives us an array with 1,2,3,4,5 as element

console.log(x);