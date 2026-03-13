// Rest params
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(23, 123, 132, 421, 123);

// Objects as params
function loginUser(user) {
  return `The User ${user.name} with the id ${user.id} is logged in.`;
}
const user = {
  id: 1,
  name: 'John',
};
console.log(loginUser(user));

function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  console.log(item);
}
getRandom(1, 2, 3, 4, 5, 2, 3, 31, 23, 23);
