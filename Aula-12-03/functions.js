function testesTipos() {
  let a = 10;
  let b = 26.65;
  let c = false;
  let d = "Henrique";
  let e = [];
  let f = {};
  let g = "Lucas";
  let h = `Igor`;
  let i = `${d}, ${g} e ${h} são estudantes.`;
  console.log(typeof a);
  console.log(typeof b);
  console.log(typeof c);
  console.log(typeof d);
  console.log(typeof e);
  console.log(typeof f);
  console.log(typeof g);
  console.log(typeof h);
  console.log(i);
  console.log(Number.parseInt("1") + 1);
}

function testesLetConstVar() {
  if (true) {
    var a = 10;
  }
  console.log(a);

  if (true) {
    let b = 11;
    console.log(b);
  }

  if (true) {
    const c = 12;
    console.log(c);
  }

  const v = [3, 6, 16, 7];
  v[0] = 10;
  console.log(v);
}

function testesControle() {
  const opt = confirm("Certeza?");
  if (opt) {
    alert("Feito.");
  } else {
    alert("Cancelado.");
  }
}

function testesRepeticao() {
  for (let i = 0; i < 25; i++) {
    console.log(i * 2);
  }
  let i = 100;
  while (i < 120) {
    console.log(i);
    i++;
  }
}

function testeObjeto() {
  const pessoa = {
    nome: "Henrique",
    idade: 21,
    cpf: "123.456.789-00",
  };

  console.log(typeof pessoa);
  console.log(pessoa);

  console.log(pessoa.nome);
  console.log(pessoa.idade);
  console.log(pessoa.cpf);
}

function testeObjeto2() {
  const generico = [12, "Henrique", 45];
  console.log(typeof generico);
  console.log(generico);

  for (let i = 0; i < generico.length; i++) {
    console.log(generico[i]);
  }
}

function testeArrayComObjeto() {
  const pessoas = [
    { "nome": "Rosinei", "idade": 21 },
    { "nome": "Igor", "idade": 21 },
    { "nome": "Lucas", "idade": 21 }
  ];
  for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome, ': ', pessoas[i].idade);
  }
}

function testeArrayComObjeto2(){
    const pessoas = {
        "nome": "Ilda",
        "idade": 45,
        "dependentes": [
            'Ana', 'Paulo', 'Isaias'
        ]
    }
}
