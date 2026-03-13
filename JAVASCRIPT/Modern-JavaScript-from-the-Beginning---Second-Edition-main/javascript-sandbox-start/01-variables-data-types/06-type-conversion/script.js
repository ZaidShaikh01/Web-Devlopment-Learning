let amount = '100';
// Different ways to convert Sting into Number
// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);

// Change number to string
amount = amount.toString();
// amount = String(amount);
// Change String to decimal
amount = parseFloat(amount);

// Booolean number
let s = 1;

s = Boolean(s);

// 5 ways to end up with NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log('foo' / 3);
// console.log(undefined + undefined);
// let j = 'hello';
// j = parseInt(j);

console.log(amount, typeof amount);
