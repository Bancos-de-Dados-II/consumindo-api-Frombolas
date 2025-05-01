async function getTasks() {
    try {
      const resposta = await fetch('http://localhost:3000/tasks');
      if (!resposta.ok) {
        throw new Error('Erro na requisição: ' + resposta.status);
      }
  
      const tasks = await resposta.json();
      const lista = document.querySelector('.listTask');

      tasks.forEach(task =>{
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