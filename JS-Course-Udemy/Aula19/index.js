// Tipos de dados primitivos

// string
const nome = "Henrique";
const nome1 = "Henrique";
const nome2 = `Henrique`;

// number
const num = 10;
const num1 = 10.23;

// undefined e null -> não apontam para lugar nenhum na memória
let nomeAluno;
let sobrenomeAluno = null;

// booleans
const verdade = true;
const falso = false;

let a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b); // Em teoria, ao dar push no número 3 no vetor B, apenas o B teria [ 1, 2, 3 ] como output, mas ao atibuir "b = a", ambos apontam pelo mesmo local na memória, ou seja, todas as alterações feitas à "a" serão feitas à "b", a não ser que "a" seja alterado no código.

// Ex.:

a = [1, 2, 3, 4];
console.log(a, b);