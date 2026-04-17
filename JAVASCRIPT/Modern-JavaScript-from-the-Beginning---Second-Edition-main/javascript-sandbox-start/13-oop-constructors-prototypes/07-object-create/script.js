const rectanglePrototype = {
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * this.width * this.height;
  },
  isSquare: function () {
    return this.width === this.height;
  },
};

function createRectangle(height, width) {
  return Object.create(rectanglePrototype, {
    height: {
      value: height,
    },
    width: {
      value: width,
    },
  });
}

const react = createRectangle(10, 20);
console.log(react);
console.log(react.area());
console.log(react.isSquare());

