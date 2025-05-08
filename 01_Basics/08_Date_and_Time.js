let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.getDay());


console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 1, 14)
// let myCreatedDate = new Date(2024, 1, 14, 5, 20, 20)
let myCreatedDate = new Date("2024-02-14")
console.log(myCreatedDate.toLocaleString());


let myTime = Date.now()
console.log(myTime.toLocaleString());
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


console.log(myDate.getDay());


myDate.toLocaleString('default', {
    weekday:"long"
})

console.log(myTime.toLocaleString());