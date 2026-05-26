// Estados do semáforo
const cores = ['vermelha', 'amarela', 'verde'];
let indiceAtual = 0;
let tempoRestante = 3;
let intervalo;

// Elementos do DOM
const luzVermelha = document.getElementById('luz-vermelha');
const luzAmarela = document.getElementById('luz-amarela');
const luzVerde = document.getElementById('luz-verde');
const timerElement = document.getElementById('timer');
const statusText = document.getElementById('status-text');

// Atualiza a visualização do semáforo
function atualizarSemaforo() {
    // Apaga todas as luzes
    luzVermelha.classList.remove('acesa');
    luzAmarela.classList.remove('acesa');
    luzVerde.classList.remove('acesa');

    luzVermelha.classList.add('apagada');
    luzAmarela.classList.add('apagada');
    luzVerde.classList.add('apagada');

    // Acende a luz atual
    const corAtual = cores[indiceAtual];
    if (corAtual === 'vermelha') {
        luzVermelha.classList.remove('apagada');
        luzVermelha.classList.add('acesa');
        statusText.textContent = 'Cor atual: Vermelho (Pare)';
    } else if (corAtual === 'amarela') {
        luzAmarela.classList.remove('apagada');
        luzAmarela.classList.add('acesa');
        statusText.textContent = 'Cor atual: Amarelo (Atenção)';
    } else {
        luzVerde.classList.remove('apagada');
        luzVerde.classList.add('acesa');
        statusText.textContent = 'Cor atual: Verde (Siga)';
    }
}

// Atualiza o timer na tela
function atualizarTimer() {
    timerElement.textContent = tempoRestante;
}

// Troca para a próxima cor
window.trocarCor = function() {
    indiceAtual = (indiceAtual + 1) % cores.length;
    tempoRestante = 3;
    atualizarSemaforo();
    atualizarTimer();
}

// Loop do timer automático
function iniciarTimer() {
    intervalo = setInterval(function() {
        tempoRestante--;
        atualizarTimer();

        if (tempoRestante <= 0) {
            window.trocarCor();
        }
    }, 1000);
}

// Inicializa
atualizarSemaforo();
atualizarTimer();
iniciarTimer();