let selecionarPeca = null;

function selecionarPeca(botao){
    if(pecaSelicionada){
        moverPeca(botao);
    }else if (botao.innerHTML.trim() !== ""){
        pecaSelecionada = botao;
        botao.style.border = "2xp solid blue";
    } 

    function moverPeca(botaoDestino){
        if(botaoDestino.innerHTML.trim() === ""){
            botaoDestino.innerHTML = pecaSelecionada.innerHTML;
            pecaSelecionada.innerHTML = "";
            pecaSelecionada.style.border = "none";
            pecaSelecionada = null;
        }

    }
        
}