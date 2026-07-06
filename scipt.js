// Aguarda o HTML carregar completamente na página
document.addEventListener("DOMContentLoaded", function() {

    // 1. Mapeamos os elementos do HTML que vamos usar/manipular
    const botaoCalcular = document.getElementById("btn-calcular");
    const destinoSelect = document.getElementById("destino-select");
    const quantidadeInput = document.getElementById("quantidade-viajantes");
    const resultadoDiv = document.getElementById("resultado");

    // 2. Criamos a função que calcula o orçamento
    function calcularOrcamento() {
        // Captura o preço base do destino selecionado (convertendo o texto para número)
        const precoBase = parseFloat(destinoSelect.value);
        
        // Captura a quantidade de viajantes
        const quantidade = parseInt(quantidadeInput.value);

        // Validação simples para evitar números negativos ou zero
        if (isNaN(quantidade) || quantidade <= 0) {
            resultadoDiv.style.color = "red";
            resultadoDiv.innerText = "Por favor, insira uma quantidade válida de viajantes.";
            return; // Interrompe a função aqui caso dê erro
        }

        // Faz a conta matemática simples: Preço x Pessoas
        const valorTotal = precoBase * quantidade;

        // Formata o número para o padrão de moeda brasileira (R$)
        const valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Exibe o resultado na tela mudando o visual da div de resultado
        resultadoDiv.style.color = "#155724";
        resultadoDiv.style.backgroundColor = "#d4edda";
        resultadoDiv.style.border = "1px solid #c3e6cb";
        resultadoDiv.innerHTML = `🎉 O valor total estimado para ${quantidade} pessoa(s) é: <strong>${valorFormatado}</strong>`;
    }

    // 3. Adiciona o evento de 'ouvinte' para rodar a função quando o botão for clicado
    botaoCalcular.addEventListener("click", calcularOrcamento);
});