/* let num1 = 1600;
let num2 = 2.5;
let num3 = 12.345367834673;

console.log(num1 + num2);
console.log(num1.toString() + num2.toString());
console.log(typeof num1, typeof num2);
console.log(num1.toString(2));
console.log(num3.toFixed(2));

console.log(Number.isInteger(num1), Number.isInteger(num2), Number.isInteger(num3)); */

let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));