async function updateTask(id, task) {
    try {
      const resposta = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });
  
      if (!resposta.ok) {
        throw new Error('Erro ao atualizar tarefa');
      }
  
      console.log('Tarefa atualizada com sucesso!');
    } catch (erro) {
      console.error('Erro ao atualizar:', erro);
    }
  }