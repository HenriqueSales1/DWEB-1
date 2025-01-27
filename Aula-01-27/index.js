// Arrays em JS

/* Pode-se criar um array com o construtor 'Array'

-> const arrayTeste = new Array(0, 1, 2, 3, 4);
-> const arrayTeste1 = Array(0, 1, 2, 3, 4);

Pode ser declarado com e sem 'new' */

// Quando cria-se o Array passando apenas um parâmetro, ele é interpretado como o tamanho do array.

/*
const arrayVazio = new Array(2);
console.log (arrayVazio.length); // 2, pois o array tem 2 espaços, mas está vazio
console.log (arrayVazio[0]); // undefined, pois não foi passado o valor para o índice 0
console.log(0 in arrayVazio); // false, pois o índice 0 não existe no array
console.log(1 in arrayVazio); // false, pois o índice 1 não existe no array
*/

/*
const arrayDeUmValor = new Array("2"); // neste caso, é passado um único valor para o array
console.log(arrayDeUmValor.length); // apenas um valor foi passado, então o array tem apenas 1 espaço
console.log(arrayDeUmValor[0]); // retorno da string '2'
console.log(0 in arrayDeUmValor); // true, pois o índice 0 foi preenchido
*/

const listaDeLegumes = new Array("batata", "cenoura", "repolho");
console.log(listaDeLegumes);
function retornaUltimo(arr){
    return arr.at(-1); // retorna o último elemento do array
}
console.log(retornaUltimo(listaDeLegumes)); // repolho
listaDeLegumes.push("tomate"); // adiciona elemento no array na última posição
console.log(listaDeLegumes); // ['batata', 'cenoura', 'repolho', 'tomate']
console.log(retornaUltimo(listaDeLegumes)); // tomate
console.log(listaDeLegumes.slice(0, 2)); // separa o array em dois, do índice 0 até o 2 (excluindo o 2)
// ['batata', 'cenoura']
console.log(listaDeLegumes.slice(2, 4)); // separa o array em dois, do índice 2 até o 4 (excluindo o 4)
// ['repolho', 'tomate']
const listaDeFrutas = new Array("laranja", "maçã", "banana");
const listaDeCompras = listaDeLegumes.concat(listaDeFrutas); // concatena os dois arrays e atribui a listaDeCompras
console.log(listaDeCompras);
