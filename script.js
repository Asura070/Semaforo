// script.js

// Variáveis globais clássicas
var corAtual = 1; // 1=Vermelho, 2=Verde, 3=Amarelo
var tempo = 3;

function trocarCor() {
    var luzVermelha = document.getElementById("vermelho");
    var luzAmarela = document.getElementById("amarelo");
    var luzVerde = document.getElementById("verde");
    var texto = document.getElementById("status-text");

    // Se for vermelho, vai pro verde
    if (corAtual == 1) {
        luzVermelha.style.backgroundColor = "#440000"; // apaga vermelho
        luzAmarela.style.backgroundColor = "#555500"; // apaga amarelo
        luzVerde.style.backgroundColor = "lime"; // acende verde
        texto.innerHTML = "Cor atual: Verde";
        corAtual = 2;
        tempo = 3; // reseta o tempo
    } 
    // Se for verde, vai pro amarelo
    else if (corAtual == 2) {
        luzVermelha.style.backgroundColor = "#440000"; 
        luzAmarela.style.backgroundColor = "yellow"; // acende amarelo
        luzVerde.style.backgroundColor = "#004400"; // apaga verde
        texto.innerHTML = "Cor atual: Amarelo";
        corAtual = 3;
        tempo = 3;
    } 
    // Se for amarelo, volta pro vermelho
    else if (corAtual == 3) {
        luzVermelha.style.backgroundColor = "red"; // acende vermelho
        luzAmarela.style.backgroundColor = "#555500"; // apaga amarelo
        luzVerde.style.backgroundColor = "#004400"; // apaga verde
        texto.innerHTML = "Cor atual: Vermelho";
        corAtual = 1;
        tempo = 3;
    }
    
    document.getElementById("timer").innerHTML = tempo;
}

// Função de timer básica com setInterval
setInterval(function() {
    tempo = tempo - 1;
    if (tempo <= 0) {
        trocarCor();
    } else {
        document.getElementById("timer").innerHTML = tempo;
    }
}, 1000);