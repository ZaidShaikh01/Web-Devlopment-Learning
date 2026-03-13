let x;
const name = 'zaid';
const age = 20;
x = 'Hello my name is ' + name + ' and I am ' + age + 'Years old.';

// Templete literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String properties and methods
const s = 'hello world';
x = s.length;
// Acces value by key
x = s[0];

x = s.__proto__; //It shows all the metods that are available
//toUpperCase
//toLowerCase
//charAt -- Gives us char at index
//indexOf -- give us index of char
//substring -- gives us string from start to end substring(0,4); substring(7) -- starts from 7
// slice -- same as substring but we can start from negative numbers to
// trim -- trims the whitespace
// Replace -- it replaces a particular string or character
// includes -- returns true or false
// valueOf -- gives the value of s
// split -- splits the string s.split(" "); splits by the space here
console.log(x);
