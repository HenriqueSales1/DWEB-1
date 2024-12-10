let ver = [false, false, false];

const troca = (event) => {
  const eSplit = event.target.id.split('imagem');
  console.log(eSplit);
  // false => !false = true
  // !false
  // false == false
  // 
  if (!(ver[Number(eSplit[1])])) {
    const img = document.getElementById("imagem" + (eSplit[1]));
    console.log(img)
    console.log(event.target.src)
    img.src = event.target.src;
    ver[Number(eSplit[1])] = true;
  }
};

const limpa = (event) => {
  console.log(event.target.id.split("troca"));
  const eSplit = event.target.id.split("troca");
  if (ver[Number(eSplit[1])]) {
    const img = document.getElementById('troca' + (eSplit[1]));
    console.log(img)
    img.src = './img/joker.png';
    ver[Number(eSplit[1])] = false;
  }
}

for (let i = 0; i <= 2; i++) {
  document.getElementById(`troca${i}`).addEventListener('click', limpa);
}
// document.getElementById("troca0").addEventListener('click', limpa);
// document.getElementById("troca1").addEventListener('click', limpa);
// document.getElementById("troca2").addEventListener('click', limpa);

for (let i = 0; i <= 9; i++) {
  document.getElementById(`imagem${i}`).addEventListener('click', troca);
}
// document.getElementById("imagem0").addEventListener("click", troca);
// document.getElementById("imagem1").addEventListener("click", troca);
// document.getElementById("imagem2").addEventListener("click", troca);
// document.getElementById("imagem3").addEventListener("click", troca);
// document.getElementById("imagem4").addEventListener("click", troca);
// document.getElementById("imagem5").addEventListener("click", troca);
// document.getElementById("imagem6").addEventListener("click", troca);
// document.getElementById("imagem7").addEventListener("click", troca);
// document.getElementById("imagem8").addEventListener("click", troca);
// document.getElementById("imagem9").addEventListener("click", troca);
