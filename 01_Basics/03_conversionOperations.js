let score = "49abc"; // Not a perfect number
let score2 = undefined

console.log(typeof score);

let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);

console.log(valueInNumber); // NaN
console.log(valueInNumber2); // 0

console.log(typeof valueInNumber); // number
console.log(typeof valueInNumber2); // number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "anystring" => true

let someNumber = 23;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);