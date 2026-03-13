let x;
x = 5 + '5'; // Here it concats and gives string
x = 5 + Number('5'); // Here it gives number
x = 5 * '5'; // Here it gives number as multiply sign doesnt imply anything

x = 5 + null; // we get 5
x = 5 + true; // we get 6 as true is 1
x = 5 + false; // we get 5 as fasle is 0

x = 5 + undefined; // We get Nan
console.log(x, typeof x);
