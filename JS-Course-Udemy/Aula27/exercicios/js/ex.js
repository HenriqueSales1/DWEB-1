const num = Number(prompt("Insira um numero"));
const numTitulo = document.getElementById("num-titulo");
const texto = document.getElementById("texto");

numTitulo.innerHTML = num;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;
