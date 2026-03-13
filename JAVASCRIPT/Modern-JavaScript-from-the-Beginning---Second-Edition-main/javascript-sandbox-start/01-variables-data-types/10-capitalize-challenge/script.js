// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

const firstLetter = myString[0].toUpperCase();

const myNewString = firstLetter + myString.substring(1);
console.log(myNewString);