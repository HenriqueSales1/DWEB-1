function testeWindow() {
  //   console.log(window);
  //   console.log(window.document);
  //   console.log(window.location);
  //   window.open("https://google.com");
  //   window.alert("Teste Window");

  console.log(window);
  console.log(document);
  console.log(location);
  open("https://google.com");
  alert("Teste Window");
}

function testeDocument() {
  console.log(document);
  console.log(document.forms);
  console.log(document.images);
  console.log(document.links);
}

function testeBusca() {
  // Pelo ID
  console.log(nome);

  // Pelo ID via document
  const inputName = document.getElementById("nome");
  console.log(inputName);

  // Pelo nome da tag
  const links = document.getElementsByTagName("a");
  console.log(links);

  // Pelo seletor CSS (único)
  const inputName2 = document.querySelectorAll("section a");
  console.log(inputName2);
}

function buscaCSSTexto() {
  const h1 = document.querySelector("header h1");
  const h3 = document.querySelector("footer h3");
  const tabela = document.querySelector("table");

  h1.innerText = "Titulo Novo";
  h1.style.color = "#464646";
  h1.style.textAlign = "center";
  h1.style.borderBottom = "0.2px solid black";

  h3.className = "titulo-13";

  tabela.classList.toggle("tabela");
}

function testeRemover(e) {
  const texto = event.target.getAttribute("data-texto");
  if (confirm(`Apagar ${texto}?`)) {
    event.target.parentNode.parentNode.remove();
  }
}

function testeCriarEEncaixar(e) {
  e.preventDefault();
  const corpoTable = document.getElementById("corpo_tabela");
  const inputName = document.getElementById("nome");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const btEx = document.createElement("button");
  btEx.innerText = "Excluir";
  btEx.setAttribute("data-texto", inputName.value);
  btEx.addEventListener("click", testeRemover);

  td1.innerText = "#";
  td2.innerText = inputName.value;
  td3.append(btEx);

  tr.append(td1, td2, td3);
  corpoTable.append(tr);
}

const bt1 = document.getElementById("bt01");
bt1.addEventListener("click", testeWindow);

const bt2 = document.getElementById("bt02");
bt2.addEventListener("click", testeDocument);

const bt3 = document.getElementById("bt03");
bt3.addEventListener("click", testeBusca);

const bt4 = document.getElementById("bt04");
bt4.addEventListener("click", buscaCSSTexto);

const formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", testeCriarEEncaixar);
