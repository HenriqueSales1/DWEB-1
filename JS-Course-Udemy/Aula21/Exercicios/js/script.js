let num1 = prompt('Digite um número');
let num2 = prompt('Digite outro numero');

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

console.log(typeof num1, typeof num2);

alert(`Resultado com parseInt é ${resultado}`);