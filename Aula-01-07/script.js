const carregaCidades = async () => {
  const uf = document.getElementById("estado").value;
  const select = document.getElementById("cidade");
  select.innerHTML = "";

  const res = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  );

  const dados = await res.json();

  for (let i = 0; i < dados.length; i++) {
    const option = document.createElement("option");
    option.innerText = dados[i].nome;
    select.append(option);
  }
};

const uf = document.querySelector("#estado");
uf.addEventListener("input", carregaCidades);
