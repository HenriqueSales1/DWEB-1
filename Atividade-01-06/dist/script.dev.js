"use strict";

function removeItem(e) {
  //   e.preventDefault();
  var textTest = event.target.getAttribute("data-texto");

  if (confirm("Are you sure to remove data from ".concat(textTest, "?"))) {
    event.target.parentNode.parentNode.remove();
  }
}

function tableEditor(e) {
  e.preventDefault();
  var table = document.getElementById("table-body");
  var iptName = document.getElementById("name");
  var iptLName = document.getElementById("lastname");
  var iptBday = document.getElementById("birthday");
  var iptEmail = document.getElementById("email");
  var iptUName = document.getElementById("username");
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");
  var td6 = document.createElement("td");
  var delButton = document.createElement("button");
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

var formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", tableEditor);