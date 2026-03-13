function getCelsius(temp) {
  return ((temp - 32) * 5) / 9;
}

getCelsius = (temp) => ((temp - 32) * 5) / 9;

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}

((lenghth, width) => {
    const area = lenght * bredth;
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
    console.log(output);
})
(5,10);