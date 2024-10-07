document.addEventListener('DOMContentLoaded', function () {
    const etapas = document.querySelectorAll('.box');
    const bolas = document.querySelectorAll('.ball');
    const btnProximo = document.getElementById('proximo');
    const btnVoltar = document.getElementById('voltar');
    const btnConcluir = document.getElementById('concluir');
    let etapaAtual = 0;

    // Exibir a etapa atual
    function mostrarEtapa(index) {
        etapas.forEach((etapa, i) => {
            etapa.classList.toggle('active', i === index);
        });
        bolas.forEach((bola, i) => {
            bola.classList.toggle('active', i === index);
        });

        // Esconder o botão de voltar na primeira etapa
        btnVoltar.style.visibility = (index === 0) ? 'hidden' : 'visible';

        // Mostrar o botão "Concluir" na última etapa e esconder o botão "Próximo"
        if (index === etapas.length - 1) {
            btnProximo.style.display = 'none';
            btnConcluir.style.display = 'inline-block';
        } else {
            btnProximo.style.display = 'inline-block';
            btnConcluir.style.display = 'none';
        }
    }

    // Evento para avançar para a próxima etapa
    btnProximo.addEventListener('click', function () {
        if (etapaAtual < etapas.length - 1) {
            etapaAtual++;
            mostrarEtapa(etapaAtual);
        }
    });

    // Evento para voltar para a etapa anterior
    btnVoltar.addEventListener('click', function () {
        if (etapaAtual > 0) {
            etapaAtual--;
            mostrarEtapa(etapaAtual);
        }
    });

    // Mostrar a primeira etapa no carregamento
    mostrarEtapa(etapaAtual);
});
