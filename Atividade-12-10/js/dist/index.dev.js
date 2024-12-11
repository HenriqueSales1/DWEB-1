"use strict";

var ver = [false, false, false];

var troca = function troca(event) {
  var iSplit = event.target.id.split('imagem');

  if (!ver[Number(iSplit[1])]) {
    var img = document.getElementById('troca' + iSplit[1]);
    img.src = event.target.src;
    ver[Number(iSplit[1])] = true;
  }
};

var limpa = function limpa(event) {
  var eSplit = event.target.id.split("troca");

  if (ver[Number(eSplit[1])]) {
    var img = document.getElementById('troca' + eSplit[1]);
    img.src = './img/joker.png';
    ver[Number(eSplit[1])] = false;
  }
};

for (var i = 0; i <= 2; i++) {
  document.getElementById("troca".concat(i)).addEventListener('click', limpa);
}

for (var _i = 0; _i <= 9; _i++) {
  document.getElementById("imagem".concat(_i)).addEventListener('click', troca);
}