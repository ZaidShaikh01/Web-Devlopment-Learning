let x;

const todo = new Object();
todo.id = 1;
todo.name = 'buy Milk';
todo.completed = false;
s = todo;

const person = {
  address: {
    coords: {
      lat: 42.1234,
      lng: -123.123,
    },
  },
};
x = person.address.coords.lat;

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = {obj1,obj2};
// Spread operator
const obj4 = {...obj1,...obj2};
// Same as that
const obj5 = Object.assign({},obj1,obj2);


const todos = [
    {id:1, name: 'Buy milk'},
    {id:2, name: 'Pickup kids'},
    {id:3, name: 'Buy coffee'},

];
x= todo[0].name;
s = Object.keys(todo);
x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x= todo.hasOwnProperty('name');
x = obj3;
console.log(x);
