"use strict";

var num = Number(prompt("Insira um numero"));
var numTitulo = document.getElementById("num-titulo");
var texto = document.getElementById("texto");
numTitulo.innerHTML = num;
texto.innerHTML += "<p>Raiz quadrada: ".concat(Math.sqrt(num), "</p>");
texto.innerHTML += "<p>".concat(num, " \xE9 inteiro: ").concat(Number.isInteger(num), "</p>");
texto.innerHTML += "<p>\xC9 NaN: ".concat(Number.isNaN(num), "</p>");
texto.innerHTML += "<p>Arredondado pra cima: ".concat(Math.ceil(num), "</p>");
texto.innerHTML += "<p>Arredondado pra baixo: ".concat(Math.floor(num), "</p>");
texto.innerHTML += "<p>Com duas casas decimais: ".concat(num.toFixed(2), "</p>");