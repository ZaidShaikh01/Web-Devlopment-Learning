const { capitalizeWords, makeMoney } = require('./utils');

const Person = require('./Person');

console.log(makeMoney(400));
console.log(capitalizeWords('lsdkfja'));

const person1 = new Person('John', 40);

person1.greet();
