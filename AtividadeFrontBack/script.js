async function updateAPI(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const option = {
        method: "POST",
        body: data,
    };
    const res = await fetch('http://localhost/Atividade/atv2101/user/insert', option);
    const json = await res.text();
    alert(json);
}
document.querySelector("form").addEventListener("submit", updateAPI);