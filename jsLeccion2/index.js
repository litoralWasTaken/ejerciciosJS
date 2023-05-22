let stringVar = "Hello world!";
let numberVar = 42;
let isBoolean = true;

console.log(typeof stringVar);
console.log(typeof numberVar);
console.log(typeof isBoolean);

let newStringVar = stringVar.toUpperCase();

console.log(`Original string: ${stringVar}, new string: ${newStringVar}`);

let newNumberVar = numberVar.toLocaleString('ar-EG');

console.log(`Original number: ${numberVar}, new string: ${newNumberVar}`);

let newIsBoolean = isBoolean.toString();

console.log(`Original bool: ${isBoolean}, new bool: ${newIsBoolean}`);