class Shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log('Shape name: ' + this.name);
  }
}
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  logName() {
    console.log('Circle radius is: ', this.radius);
  }
}
const rect = new Rectangle('React 1', 20, 20);
console.log(rect);
rect.logName();
const circ = new Circle('Circ 1', 20);
circ.logName();
