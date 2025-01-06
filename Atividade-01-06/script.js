function removeItem(e) {
  //   e.preventDefault();
  const textTest = event.target.getAttribute("data-texto");
  if (confirm(`Are you sure to remove data from ${textTest}?`)) {
    event.target.parentNode.parentNode.remove();
  }
}

function tableEditor(e) {
  e.preventDefault();

  const table = document.getElementById("table-body");
  const iptName = document.getElementById("name");
  const iptLName = document.getElementById("lastname");
  const iptBday = document.getElementById("birthday");
  const iptEmail = document.getElementById("email");
  const iptUName = document.getElementById("username");

  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  const td6 = document.createElement("td");
  const delButton = document.createElement("button");

  delButton.innerText = "Delete";
  delButton.setAttribute("data-texto", iptName.value);
  delButton.addEventListener("click", removeItem);

  td1.innerText = iptName.value;
  td2.innerText = iptLName.value;
  td3.innerText = iptUName.value;
  td4.innerText = iptEmail.value;
  td5.innerText = iptBday.value;
  td6.append(delButton);

  tr.append(td1, td2, td3, td4, td5, td6);
  table.append(tr);
}

const formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", tableEditor);
