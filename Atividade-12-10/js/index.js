let ver = [false, false, false];

// const troca = (event) => {
//   const iSplit = event.target.id.split('imagem');
//   if (!(ver[Number(iSplit[1])])) {
//     const img = document.getElementById('troca' + (iSplit[1]));
//     img.src = event.target.src;
//     ver[Number(iSplit[1])] = true;
//   }
// };

const troca = (event) => {
  if ((ver[0] == false)) {
    const img = document.getElementById("troca0");
    img.src = event.target.src;
    ver[0] = true;
  } else if (ver[1] == false) {
    const img = document.getElementById("troca1");
    img.src = event.target.src;
    ver[1] = true;
  } else if (ver[2] == false) {
    const img = document.getElementById("troca2");
    img.src = event.target.src;
    ver[2] = true;
  }
};

const limpa = (event) => {
  const eSplit = event.target.id.split("troca");
  if (ver[Number(eSplit[1])]) {
    const img = document.getElementById('troca' + (eSplit[1]));
    img.src = './img/joker.png';
    ver[Number(eSplit[1])] = false;
  }
}

for (let i = 0; i <= 2; i++) {
  document.getElementById(`troca${i}`).addEventListener('click', limpa);
}

for (let i = 0; i <= 9; i++) {
  document.getElementById(`imagem${i}`).addEventListener('click', troca);
}
