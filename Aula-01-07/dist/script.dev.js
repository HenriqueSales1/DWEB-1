"use strict";

var carregaCidades = function carregaCidades() {
  var uf, select, res, dados, i, option;
  return regeneratorRuntime.async(function carregaCidades$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          uf = document.getElementById("estado").value;
          select = document.getElementById("cidade");
          select.innerHTML = "";
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(uf, "/municipios")));

        case 5:
          res = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(res.json());

        case 8:
          dados = _context.sent;

          for (i = 0; i < dados.length; i++) {
            option = document.createElement("option");
            option.innerText = dados[i].nome;
            select.append(option);
          }

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

var uf = document.querySelector("#estado");
uf.addEventListener("input", carregaCidades);