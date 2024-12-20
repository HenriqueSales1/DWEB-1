let umaString = `O rato roeu a roupa do rei de roma`;

console.log(umaString.charAt(2));
console.log(`${umaString} em um lindo dia.`);

// console.log(umaString.match(/[a-z]/g));
// console.log(umaString.search("e"));
console.log(umaString.replace(/o/g, "x"));

console.log(umaString.length);
console.log(umaString.slice(-4));
console.log(umaString.substring(umaString.length - 4));

console.log(umaString.split(' '));