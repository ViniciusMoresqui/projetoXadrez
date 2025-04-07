let pecaSelecionada = null;

function selecionarPeca(linha, coluna) {
    const index = linha * 8 + coluna; 
    const botoes = document.querySelectorAll(".botoes button");
    const botaoSelecionado = botoes[index];

    if (pecaSelecionada) {
        moverPeca(linha, coluna);
    } else if (botaoSelecionado.querySelector("img")) {
        pecaSelecionada = {
            linha,
            coluna,
            img: botaoSelecionado.querySelector("img").src
        };
    }
}

function moverPeca(linhaDestino, colunaDestino) {
    const botoes = document.querySelectorAll(".botoes button");
    const origemIndex = pecaSelecionada.linha * 8 + pecaSelecionada.coluna;
    const destinoIndex = linhaDestino * 8 + colunaDestino;


    if (pecaSelecionada.linha === linhaDestino || pecaSelecionada.coluna === colunaDestino) {
        const destino = botoes[destinoIndex];
        const origem = botoes[origemIndex];

        destino.innerHTML = `<img src="${pecaSelecionada.img}" alt="erro de imagem">`;

        origem.innerHTML = "";
    } else {
        alert("Movimento inválido! Somente linhas ou colunas (reto).");
    }

    pecaSelecionada = null;
}