// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

Object.seal(rectObj);
let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);

rectObj.color = 'red';
delete rectObj.name;
rectObj.width = 50;
console.log(rectObj);

const circleObj = {
  name: 'Circle 1',
  radius: 30,
};

Object.freeze(circleObj);
circleObj.radius = 50;
let descriptors1 = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors1);
console.log(circleObj);
