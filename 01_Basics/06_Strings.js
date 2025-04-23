const firstName = "star";
const lastName = "lord";
const fullName = firstName+"-"+lastName;
console.log(fullName);

const devName = new String("star-lord");
console.log(devName);

console.log(devName[0]);
console.log(devName.__proto__);

console.log(devName.length);
console.log(devName.toUpperCase());
console.log(devName);
console.log(devName.indexOf('l'));

// spend some time on methods of string.

const newName = devName.substring(5,9)
console.log(newName);

// In Slice() you can give -ve values;
const anotherString = devName.slice(-4, 0)
console.log(anotherString);

const url = "https://www.manjuharsha%20.com"
url.replace("%20", "-star-lord")
console.log(url);

console.log(url.includes("manju"));

console.log(`my dev name is ${devName}`);