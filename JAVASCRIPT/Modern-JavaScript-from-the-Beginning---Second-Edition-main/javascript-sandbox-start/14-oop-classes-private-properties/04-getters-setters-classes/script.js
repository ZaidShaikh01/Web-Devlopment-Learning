class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName; // Signifies private variable
  }
  get firstName() {
    return this._firstName.charAt(0).toUpperCase() + this._firstName.slice(1);
  }
  set firstName(value) {
    this._firstName = value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person('John', 'Doe');
person1.firstName = 'hoe';
console.log(person1.firstName);
