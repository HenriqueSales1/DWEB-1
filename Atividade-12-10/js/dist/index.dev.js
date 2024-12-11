"use strict";

var ver = [false, false, false]; // const troca = (event) => {
//   const iSplit = event.target.id.split("troca");
//   if (!ver[Number(iSplit[1])]) {
//     const img = document.getElementById(`imagem${iSplit[1]}`);
//     console.log(`imagem${iSplit[1]}`);
//     img.src = event.target.src;
//     ver[Number(iSplit[1])] = true;
//   }
// };

var troca = function troca(event) {
  if (ver[0] == false) {
    var img = document.getElementById("troca0");
    img.src = event.target.src;
    ver[0] = true;
  } else if (ver[1] == false) {
    var _img = document.getElementById("troca1");

    _img.src = event.target.src;
    ver[1] = true;
  } else if (ver[2] == false) {
    var _img2 = document.getElementById("troca2");

    _img2.src = event.target.src;
    ver[2] = true;
  }
};

var limpa = function limpa(event) {
  var eSplit = event.target.id.split("troca");

  if (ver[Number(eSplit[1])]) {
    var img = document.getElementById("troca" + eSplit[1]);
    img.src = "./img/joker.png";
    ver[Number(eSplit[1])] = false;
  }
};

for (var i = 0; i <= 2; i++) {
  document.getElementById("troca".concat(i)).addEventListener("click", limpa);
}

for (var _i = 0; _i <= 9; _i++) {
  document.getElementById("imagem".concat(_i)).addEventListener("click", troca);
}