const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Cadastro feito com sucesso!! :-)")
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {
        name,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData)

    document.getElementById('name').value='';
    document.getElementById('email').value='';
})
