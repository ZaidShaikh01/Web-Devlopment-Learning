function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimeter = function () {
  return 2 * (this.height + this.width);
};
Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect = new Rectangle('Rect', 10, 10);

console.log(rect.changeName('Zaid'));
console.log(rect);
