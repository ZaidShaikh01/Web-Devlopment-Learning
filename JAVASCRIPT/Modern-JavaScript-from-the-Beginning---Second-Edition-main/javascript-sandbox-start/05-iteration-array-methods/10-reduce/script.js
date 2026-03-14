const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accmulator, currentValue) {
  return accmulator + currentValue;
}, 0);
console.log(sum);

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
];

const total = cart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);
console.log(total);