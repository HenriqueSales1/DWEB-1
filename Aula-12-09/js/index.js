import trocador from "./functions.js";

// function executora(f){
//     f();
// }

// function minhaFuncao(){
//     alert('Executada.');
// }

// minhaFuncao();

// -----------------------------------------------

// function executora (f){
//     f();
// }

// const minhaFuncao = () => {
//     alert('Funcao');
// }

// executora(minhaFuncao);

// -----------------------------------------------

// function executora(f) {
//     f();
// }

// executora(() => {
//     alert("Funcao");
// });

// -----------------------------------------------

// function executora (f){
//     f();
// }
// executora(() => alert('Teste'));

window.addEventListener("load", () => {
  alert("Janela carregada");
});

const botao01 = document.getElementById('botao1');
botao01.addEventListener('click', trocador.jonesy1);

const botao02 = document.getElementById('botao2');
botao02.addEventListener('click', trocador.jonesy2);