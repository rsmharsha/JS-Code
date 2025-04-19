const accountId = 2622
let accountEmail = "harsharsm007@gmail.com"
var accountPassword = "12345"
let accState;

accountCity = "Bangalore";
console.table([accountId,accountEmail,accountPassword,accountCity,accState])

accountEmail = "harsha@harsha"
accountPassword = "98765434321"

console.table([accountEmail, accountPassword])

/*
    Great question! The reason why console.log(accountCity) works, even though you didn't declare it with let, const, or var, is because of JavaScript's behavior with undeclared variables in non-strict mode.

    Here's what’s happening:

    js
    accountCity = "Bangalore";
    console.log(accountCity);

    Even though you didn’t declare accountCity using let, const, or var, JavaScript implicitly creates a global variable named accountCity.

    Why?
    In non-strict mode, if you assign a value to a variable that hasn’t been declared, JavaScript automatically creates a global variable.

    This variable is attached to the window object in browsers (or global in Node.js).

    Example:
    
    js
    function test() {
    myVar = "Hello";
    }
    test();
    console.log(myVar); // This works, because myVar becomes a global variable.


    But be careful! ⚠️
    This is not good practice:
    It makes your code error-prone, especially in large applications.
    Variables can be unintentionally overwritten or cause naming conflicts.
    In strict mode ('use strict';), this will throw a ReferenceError.


*/

