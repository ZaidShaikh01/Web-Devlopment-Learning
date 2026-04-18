class Rectangle {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
  perimeter() {
    return 2 * (this.width * this.height);
  }
  logArea() {
    console.log('Rectangle area: ' + this.area());
  }
}

const square = new Rectangle('Square', 20, 20);

console.log(square.area());
console.log(square.perimeter());
square.logArea();
