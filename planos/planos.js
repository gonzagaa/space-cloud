// Adicionando o evento de "change" em todos os dropdowns
document.querySelectorAll('.gameSelect').forEach(select => {
    select.addEventListener('change', function() {
      const selectedGame = this.value;
      let fps720p = 0;
      let fps1080p = 0;
  
      if (selectedGame === 'fortnite') {
        fps720p = 216;
        fps1080p = 149;
      } else if (selectedGame === 'cod') {
        fps720p = 180;
        fps1080p = 130;
      } else if (selectedGame === 'valorant') {
        fps720p = 300;
        fps1080p = 250;
      }
  
      // Localizar o container "fpsDisplay" mais próximo do dropdown selecionado
      const card = this.closest('.card');
      const fps720pElement = card.querySelector('.fps720p');
      const fps1080pElement = card.querySelector('.fps1080p');
      const fpsDisplay = card.querySelector('.fpsDisplay');
  
      fps720pElement.textContent = `${fps720p} FPS`;
      fps1080pElement.textContent = `${fps1080p} FPS`;
  
      // Mostrar o FPS correspondente
      fpsDisplay.classList.remove('hidden');
    });
  });
  