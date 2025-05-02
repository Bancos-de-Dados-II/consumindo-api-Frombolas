const btDelete = document.getElementsByClassName("btDelete");

async function deleteTask(id) {
    try{
        const resposta = await fetch(`http://localhost:3000/tasks/${id}`, {
            method:'DELETE',
        })
        if (!resposta.ok) {
            throw new Error('Erro ao deletar tarefa');
        }
        console.log('Tarefa deletada com sucesso!');
        location.reload();
    }catch(error){
        console.error('Erro ao deletar',error);
    }
}
