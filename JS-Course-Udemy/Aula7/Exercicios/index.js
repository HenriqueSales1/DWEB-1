const nome = "Henrique";
const sobrenome = "Sales";
const idade = 21;
const peso = 76;
const alturaEmM = 1.78;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

// Template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg`);
console.log(
  `tem ${alturaEmM}m de altura e seu IMC é de ${indiceMassaCorporal}`
);
console.log(`${nome} nasceu em ${anoNascimento}`);
