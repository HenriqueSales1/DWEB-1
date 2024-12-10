// const jonesy1 = () => {
//   const img01 = document.getElementById("img1");
//   img01.src =
//     "https://media.sketchfab.com/models/fbced8b5738c49a9980ae847dcfedc70/thumbnails/826777d8b346461889918eb34c937fdd/9aeed0ae5be14f96b9f4caf94b16beb8.jpeg";
// };

// const jonesy2 = () => {
//   const img01 = document.getElementById("img1");
//   img01.src =
//     "https://4nite.site/images/webp/CID_883_Athena_Commando_M_ChOneJonesy.webp";
// };

// export { jonesy1, jonesy2 };


/*
const trocador = {
  jonesy1: () => {
    const img01 = document.getElementById("img1");
    img01.src =
      "https://media.sketchfab.com/models/fbced8b5738c49a9980ae847dcfedc70/thumbnails/826777d8b346461889918eb34c937fdd/9aeed0ae5be14f96b9f4caf94b16beb8.jpeg";
  },
  jonesy2: () => {
    const img01 = document.getElementById("img1");
    img01.src =
      "https://4nite.site/images/webp/CID_883_Athena_Commando_M_ChOneJonesy.webp";
  },
};

export default trocador;
*/

const troca = (event) => {
  // alert(event.target.innerText);
  const img = document.getElementById('img1')
  if (event.target.innerText == 'Botao 1') {
    img.src = './img/imagem2.jpg';
    console.log('imagem 1 carregada')
  } else if (event.target.innerText == 'Botao 2') {
    img.src = './img/imagem.jpg';
  }
};

export default troca;