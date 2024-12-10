"use strict";

var _functions = _interopRequireDefault(require("./functions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import trocador from "./functions.js";

/*
function executora(f){
    f();
}
*/

/*
function minhaFuncao(){
    alert('Executada.');
}
*/
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
window.addEventListener("load", function () {// alert("Janela carregada");
});
var botao01 = document.getElementById('botao1');
botao01.addEventListener('click', _functions["default"]);
var botao02 = document.getElementById('botao2');
botao02.addEventListener('click', _functions["default"]);