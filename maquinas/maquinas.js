// Seleciona todos os botões de toggle
const toggleButtons = document.querySelectorAll('#toggle-button');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Seleciona o conteúdo adicional correspondente ao botão clicado
        const additionalContent = button.closest('.border-card').querySelector('.additional-content');
        const card = button.closest('.card');

        // Alterna a classe 'show' no conteúdo adicional
        additionalContent.classList.toggle('show');

        // Se a div adicional estiver visível, remova 'hidden' e adicione 'active' ao card
        if (additionalContent.classList.contains('show')) {
            additionalContent.classList.remove('hidden');
            card.classList.add('active'); // Adiciona a classe ao card
        } else {
            // Remove a classe 'active' do card imediatamente
            card.classList.remove('active'); // Remove a classe do card quando o conteúdo está oculto
            
            // Adiciona um listener para esconder após a transição
            additionalContent.addEventListener('transitionend', () => {
                if (!additionalContent.classList.contains('show')) {
                    additionalContent.classList.add('hidden');
                }
            }, { once: true });
        }
    });
});



