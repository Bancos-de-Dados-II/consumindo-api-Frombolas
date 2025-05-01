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
    try{
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        clearField();
        console.log('Tarefa salva com sucesso');
    }catch(error){
        console.error('Falha ao salvar tarefa',error);
    }
}

function clearField(){
    titulo.value = '';
    descricao.value = ''; 
    tipo.value = '';
}

btSalvar.addEventListener('click', salvarTask);
 