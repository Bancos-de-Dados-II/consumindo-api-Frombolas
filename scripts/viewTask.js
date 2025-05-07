async function getTasks() {
    try {
      const resposta = await fetch('http://localhost:3000/tasks');
      if (!resposta.ok) {
        throw new Error('Erro na requisição: ' + resposta.status);
      }
  
      const tasks = await resposta.json();
      const lista = document.querySelector('.listTask');

      tasks.forEach(task =>{
        const btDelete = document.createElement('button');
        btDelete.className = 'btDelete';
        btDelete.textContent = `Deletar`;

        const btUpdate = document.createElement('button');
        btUpdate.className= 'btUpdate';
        btUpdate.textContent = "Atualizar";

        const container = document.createElement('div');
        container.className = 'task';

        const titulo = document.createElement('h3');
        titulo.textContent = task.titulo;

        const descricao = document.createElement('p');
        descricao.textContent = task.descricao;

        const tipo = document.createElement('p');
        tipo.textContent = `Tipo: ${task.tipo}`;

        const data = document.createElement('small');
        data.textContent = `Criado em: ${new Date(task.createdAt).toLocaleString()}`;

        //Essas funções estão funcionando pois estão sendo carregadas no mesmo html
        //Função de remover task 
        btDelete.addEventListener('click', async () => {
          await deleteTask(task.id);
          container.remove();
        });

        //Função de atualizar task
        btUpdate.addEventListener('click', async () => {
          const novoTitulo = prompt('Novo título:', task.titulo);
          const novaDescricao = prompt('Nova descrição:', task.descricao);
        
          if (novoTitulo !== null && novaDescricao !== null) {
            await updateTask(task.id, {
              titulo: novoTitulo,
              descricao: novaDescricao,
            });
            location.reload();
          }
        });

        container.appendChild(btDelete);
        container.appendChild(btUpdate);
        container.appendChild(titulo);
        container.appendChild(descricao);
        container.appendChild(tipo);
        container.appendChild(data);

        lista.appendChild(container);
      })
    } catch (erro) {
      console.error('Erro ao fazer a requisição:', erro);
    }
}

getTasks();
