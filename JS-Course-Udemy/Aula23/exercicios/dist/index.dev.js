"use strict";

var varA = "A";
var varB = "B";
var varC = "C";
console.log(varA, varB, varC); // const aux1 = varA;
// varA = varB;
// varB = varC;
// varC = aux1;

var _ref = [varB, varC, varA];
varA = _ref[0];
varB = _ref[1];
varC = _ref[2];
console.log(varA, varB, varC);