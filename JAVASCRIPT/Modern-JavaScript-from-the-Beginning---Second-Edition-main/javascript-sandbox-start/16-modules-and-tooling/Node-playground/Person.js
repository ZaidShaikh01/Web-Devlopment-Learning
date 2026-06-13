class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello From ${this.name} & my age is ${this.age}`);
  }
}
module.exports = Person;
