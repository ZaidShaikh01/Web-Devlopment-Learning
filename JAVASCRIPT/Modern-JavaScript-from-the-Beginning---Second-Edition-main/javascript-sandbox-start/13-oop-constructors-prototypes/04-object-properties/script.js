function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle('Recatangle 1', 20, 20);
const rect2 = new Rectangle('Recatangle 1', 20, 30);

console.log(rect1);

// Adding new functions and parameters
rect1.color = 'red';
rect1.perimeter = () => {
  return (rect1.height + rect1.width) * 2;
};

// Delete property
delete rect2.perimeter;
console.log(rect1.perimeter());
// check property
console.log(rect1.hasOwnProperty('color'));
console.log(rect2.hasOwnProperty('color'));
// Get keys
console.log(Object.keys(rect1));
// get values
console.log(Object.values(rect1));
// Get entries
console.log(Object.entries(rect1));

for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(key + ' : ' + value);
  }
}
