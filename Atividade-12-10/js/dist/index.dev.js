"use strict";

var ver = [false, false, false];

var troca = function troca(event) {
  if (ver[0] == false) {
    var img = document.getElementById("troca1");
    img.src = event.target.src;
    ver[0] = true;
  } else if (ver[1] == false) {
    var _img = document.getElementById("troca2");

    _img.src = event.target.src;
    ver[1] = true;
  } else if (ver[2] == false) {
    var _img2 = document.getElementById("troca3");

    _img2.src = event.target.src;
    ver[2] = true;
  }
};

var limpa = function limpa(event) {
  if (ver[0] == true) {
    var img = document.getElementById('troca1');
    img.src = './img/joker.png';
    ver[0] = false;
  } else if (ver[1] == true) {
    var _img3 = document.getElementById('troca2');

    _img3.src = './img/joker.png';
    ver[1] = false;
  } else if (ver[2] == true) {
    var _img4 = document.getElementById('troca3');

    _img4.src = './img/joker.png';
    ver[2] = false;
  }
};

document.getElementById("troca1").addEventListener('click', limpa);
document.getElementById("troca2").addEventListener('click', limpa);
document.getElementById("troca3").addEventListener('click', limpa);
document.getElementById("imagem1").addEventListener("click", troca);
document.getElementById("imagem2").addEventListener("click", troca);
document.getElementById("imagem3").addEventListener("click", troca);
document.getElementById("imagem4").addEventListener("click", troca);
document.getElementById("imagem5").addEventListener("click", troca);
document.getElementById("imagem6").addEventListener("click", troca);
document.getElementById("imagem7").addEventListener("click", troca);
document.getElementById("imagem8").addEventListener("click", troca);
document.getElementById("imagem9").addEventListener("click", troca);
document.getElementById("imagem10").addEventListener("click", troca);