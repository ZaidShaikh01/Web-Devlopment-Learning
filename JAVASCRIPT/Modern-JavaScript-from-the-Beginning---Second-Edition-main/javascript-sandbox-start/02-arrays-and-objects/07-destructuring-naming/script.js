const firstName = 'John';
const lastName = 'Doe';
const age =30;

const person = {
    firstName,
    lastName,
    age
};
console.log(person.firstName);

// Destructuring
const todo = {
    id: 1,
    title: 'Take out trash',
};
const {id,title} = todo;
console.log(title);

// Rename keys
const {
    id:todoId,
    
    user:{name},

} = todo;

// Destructure arrays
const numbers = [23,67,33,49]
const [first,secound, ...rest] = numbers;
console.log(first);