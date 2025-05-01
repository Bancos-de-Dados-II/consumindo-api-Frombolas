const btSalvar = document.getElementById("btSave");
const titulo = document.getElementById("title");
const descricao = document.getElementById("description");
const tipo = document.getElementById("type");

function salvarTask(){
    const task = {
        titulo: titulo.value,
        descricao: descricao.value,
        tipo: tipo.value
    };

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    clearField();
}

function clearField(){
    titulo.value = '';
    descricao.value = ''; 
    tipo.value = '';
}

btSalvar.addEventListener('click', salvarTask);
 