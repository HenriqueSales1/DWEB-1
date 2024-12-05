"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var num1 = prompt('Digite um número');
var num2 = prompt('Digite outro numero');
num1 = Number(num1);
num2 = Number(num2);
var resultado = num1 + num2;
console.log(_typeof(num1), _typeof(num2));
alert("Resultado com parseInt \xE9 ".concat(resultado));