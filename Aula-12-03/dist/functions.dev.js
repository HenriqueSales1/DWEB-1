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
  console.log(_typeof(a));
  console.log(_typeof(b));
  console.log(_typeof(c));
  console.log(_typeof(d));
  console.log(_typeof(e));
  console.log(_typeof(f));
  console.log(_typeof(g));
  console.log(_typeof(h));
}