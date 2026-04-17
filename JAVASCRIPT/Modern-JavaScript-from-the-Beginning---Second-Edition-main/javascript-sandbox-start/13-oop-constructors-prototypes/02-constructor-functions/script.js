function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}
const react1 = new Rectangle('Rect1',10,10);

console.log(react1.area());

console.log(react1.constructor);

console.log(react1.instance(Rectangle()));
