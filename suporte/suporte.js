// Seleciona todos os botões 'Ver mais' dentro dos cards
const buttons = document.querySelectorAll('.card button');

// Adiciona um evento de clique a cada botão
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const cardId = String(index + 1).padStart(5, '0'); // Gera o ID correto com 5 dígitos, ex: '00001', '00002'

    // Carrega o arquivo JSON
    fetch('suporte.json')
      .then(response => response.json())
      .then(data => {
        const topic = data[cardId]; // Acessa o tópico com base no ID gerado

        if (topic) {
          // Atualiza o conteúdo do modal
          document.getElementById('modal-title').textContent = topic.title;
          document.getElementById('modal-content').textContent = topic.content;
          
          // Exibe o modal
          document.getElementById('modal').style.display = 'block';
        } else {
          console.error(`Tópico com o ID ${cardId} não encontrado.`);
        }
      })
      .catch(error => console.error('Erro ao carregar o JSON:', error));
  });
});

// Função para fechar o modal
document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Função para fechar o modal ao clicar fora do modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
  
    if (event.target === modal) { // Verifica se o clique foi fora do conteúdo
      modal.style.display = 'none';
    }
});

// Função para carregar os dados JSON e preencher os cards
function carregarDados() {
    fetch('suporte.json')
      .then(response => response.json())
      .then(data => {
        const cards = document.querySelectorAll('.card'); // Seleciona todos os cards
        cards.forEach((card, index) => {
          const cardId = String(index + 1).padStart(5, '0'); // Gera o ID correto com 5 dígitos
  
          const topic = data[cardId]; // Acessa o tópico com base no ID gerado
          if (topic) {
            // Atualiza o título e o resumo do card
            card.querySelector('h4').textContent = topic.title;
            card.querySelector('p').textContent = topic.resume;
          } else {
            console.error(`Tópico com o ID ${cardId} não encontrado.`);
          }
        });
      })
      .catch(error => console.error('Erro ao carregar o JSON:', error));
  }
  
  // Carregar os dados ao carregar a página
  window.onload = carregarDados;
  