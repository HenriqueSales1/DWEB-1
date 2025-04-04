let ver = [false, false, false];

// const troca = (event) => {
//   const iSplit = event.target.id.split("troca");
//   if (!ver[Number(iSplit[1])]) {
//     const img = document.getElementById(`imagem${iSplit[1]}`);
//     console.log(`imagem${iSplit[1]}`);
//     img.src = event.target.src;
//     ver[Number(iSplit[1])] = true;
//   }
// };

const troca = (event) => {
  if ((ver[0] == false)) {
    const img = document.getElementById("troca0");
    img.src = event.target.src;
    ver[0] = true;
  } else if (ver[1] == false) {
    const img = document.getElementById("troca1");
    img.src = event.target.src;
    ver[1] = true;
  } else if (ver[2] == false) {
    const img = document.getElementById("troca2");
    img.src = event.target.src;
    ver[2] = true;
  }
};

const limpa = (event) => {
  const eSplit = event.target.id.split("troca");
  if (ver[Number(eSplit[1])]) {
    const img = document.getElementById("troca" + eSplit[1]);
    img.src = "./img/joker.png";
    ver[Number(eSplit[1])] = false;
  }
};

for (let i = 0; i <= 2; i++) {
  document.getElementById(`troca${i}`).addEventListener("click", limpa);
}
// sendLog("info", `teste`);

for (let i = 0; i <= 9; i++) {
  document.getElementById(`imagem${i}`).addEventListener("click", troca);
  document.getElementById(`imagem${i}`).addEventListener("click", sendLog());
}
// sendLog("info", `teste`);

function sendLog(level, message) {
  fetch('./index.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ level: level, message: message })
  })
  .then(response => response.json())
  .then(data => {
      if (data.status === 'success') {
          console.log('Log sent successfully');
      } else {
          console.error('Failed to send log:', data.message);
      }
  })
  .catch(error => console.error('Error:', error));
}

// Example usage
sendLog('info', 'This is an info message from JavaScript');
sendLog('error', 'This is an error message from JavaScript');
