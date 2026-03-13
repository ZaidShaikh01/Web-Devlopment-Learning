const arr = [1, 2, 3, 4, 5];

const arr2 = [5, 6, 7, 8, 9, 10];
// arr.pop();
// let output = arr +','+ arr2;
const output = [...arr,...arr2];
output.splice(4,1);
console.log(output);
