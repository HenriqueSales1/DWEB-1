"use strict";

// Tipos de dados primitivos
// string
var nome = "Henrique";
var nome1 = "Henrique";
var nome2 = "Henrique"; // number

var num = 10;
var num1 = 10.23; // undefined e null -> não apontam para lugar nenhum na memória

var nomeAluno;
var sobrenomeAluno = null; // booleans

var verdade = true;
var falso = false;
var a = [1, 2];
var b = a;
console.log(a, b);
b.push(3);
console.log(a, b); // Em teoria, ao dar push no número 3 no vetor B, apenas o B teria [ 1, 2, 3 ] como output, mas ao atibuir "b = a", ambos apontam pelo mesmo local na memória, ou seja, todas as alterações feitas à "a" serão feitas à "b", a não ser que "a" seja alterado no código.
// Ex.:

a = [1, 2, 3, 4];
console.log(a, b);