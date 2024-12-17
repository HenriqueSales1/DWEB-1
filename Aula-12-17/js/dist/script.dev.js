"use strict";

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
  console.log(nome); // Pelo ID via document

  var inputName = document.getElementById("nome");
  console.log(inputName); // Pelo nome da tag

  var links = document.getElementsByTagName("a");
  console.log(links); // Pelo seletor CSS (único)

  var inputName2 = document.querySelectorAll("section a");
  console.log(inputName2);
}

function buscaCSSTexto() {
  var h1 = document.querySelector("header h1");
  var h3 = document.querySelector("footer h3");
  var tabela = document.querySelector("table");
  h1.innerText = "Titulo Novo";
  h1.style.color = "#464646";
  h1.style.textAlign = "center";
  h1.style.borderBottom = "0.2px solid black";
  h3.className = "titulo-13";
  tabela.classList.toggle('tabela');
}

function testeCriarEEncaixar(e) {
  e.preventDefault();
  var corpoTable = document.getElementById("corpo_tabela");
  var inputName = document.getElementById("nome");
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  td1.innerText = '#';
  td2.innerText = inputName.value;
  td3.innerText = 'Ação';
  tr.append(td1, td2, td3);
  corpoTable.append(tr);
}

var bt1 = document.getElementById("bt01");
bt1.addEventListener("click", testeWindow);
var bt2 = document.getElementById("bt02");
bt2.addEventListener("click", testeDocument);
var bt3 = document.getElementById("bt03");
bt3.addEventListener("click", testeBusca);
var bt4 = document.getElementById("bt04");
bt4.addEventListener("click", buscaCSSTexto);
var formSubmit = document.querySelector('form');
formSubmit.addEventListener("click", testeCriarEEncaixar);