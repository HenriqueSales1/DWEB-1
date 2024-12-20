let varA = "A";
let varB = "B";
let varC = "C";

console.log(varA, varB, varC);

// const aux1 = varA;

// varA = varB;
// varB = varC;
// varC = aux1;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);