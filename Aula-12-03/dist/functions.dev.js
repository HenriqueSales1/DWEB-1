"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function testesTipos() {
  var a = 10;
  var b = 26.65;
  var c = false;
  var d = "Henrique";
  var e = [];
  var f = {};
  var g = "Lucas";
  var h = "Igor";
  var i = "".concat(d, ", ").concat(g, " e ").concat(h, " s\xE3o estudantes.");
  console.log(_typeof(a));
  console.log(_typeof(b));
  console.log(_typeof(c));
  console.log(_typeof(d));
  console.log(_typeof(e));
  console.log(_typeof(f));
  console.log(_typeof(g));
  console.log(_typeof(h));
  console.log(i);
  console.log(Number.parseInt("1") + 1);
}

function testesLetConstVar() {
  if (true) {
    var a = 10;
  }

  console.log(a);

  if (true) {
    var b = 11;
    console.log(b);
  }

  if (true) {
    var c = 12;
    console.log(c);
  }

  var v = [3, 6, 16, 7];
  v[0] = 10;
  console.log(v);
}

function testesControle() {
  var opt = confirm("Certeza?");

  if (opt) {
    alert("Feito.");
  } else {
    alert("Cancelado.");
  }
}

function testesRepeticao() {
  for (var _i = 0; _i < 25; _i++) {
    console.log(_i * 2);
  }

  var i = 100;

  while (i < 120) {
    console.log(i);
    i++;
  }
}

function testeObjeto() {
  var pessoa = {
    nome: "Henrique",
    idade: 21,
    cpf: "123.456.789-00"
  };
  console.log(_typeof(pessoa));
  console.log(pessoa);
  console.log(pessoa.nome);
  console.log(pessoa.idade);
  console.log(pessoa.cpf);
}

function testeObjeto2() {
  var generico = [12, "Henrique", 45];
  console.log(_typeof(generico));
  console.log(generico);

  for (var i = 0; i < generico.length; i++) {
    console.log(generico[i]);
  }
}

function testeArrayComObjeto() {
  var pessoas = [{
    "nome": "Rosinei",
    "idade": 21
  }, {
    "nome": "Igor",
    "idade": 21
  }, {
    "nome": "Lucas",
    "idade": 21
  }];

  for (var i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome, ': ', pessoas[i].idade);
  }
}

function testeArrayComObjeto2() {
  var pessoas = {
    "nome": "Ilda",
    "idade": 45,
    "dependentes": ['Ana', 'Paulo', 'Isaias']
  };
}