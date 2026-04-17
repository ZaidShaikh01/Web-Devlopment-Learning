function Shape(name) {
  this.name = name;
}
Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
};
function Rectangle(name, height, width) {
  Shape.call(this, name);
  this.width = width;
  this.height = height;
}
// Inherites shape prototype
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
};
// Set prototype constructor
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;
function Circle(name, radius) {
  Shape.call(this, name);
  this.radius = radius;
}
const rect = new Rectangle('Rectangle 1', 10, 10);
console.log(rect);
const circle = new Circle('Circle 1 ', 10);
console.log(circle);

rect.logName();
