let score = 400;
console.log(score);

let balance = new Number(95);
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // we use this in e-commerce generally.

const otherNum = 123.8966;
console.log(otherNum.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)

// +++++++++++++++++++++ MATHS ++++++++++++++++++++++++

console.log(Math.abs(-6));
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.round(4.6))
console.log(Math.min(4,6,8,5,4))
console.log(Math.max(4,6,8,5,4))

console.log((Math.floor(Math.random()*10)) + 1);

let max = 20;
let min = 10;
console.log(Math.floor(Math.random() * (max-min+1)) + min);
