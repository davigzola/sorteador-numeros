function sorteadorDeNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function alternarBotao(botao) {
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.removeAttribute('disabled');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.setAttribute('disabled', true);
    }
}

function sortear() {
    let numerosSorteados = [];

    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById('de').value);
    let numeroMaximo = parseInt(document.getElementById('ate').value);

    if(isNaN(quantidadeDeNumeros) || isNaN(numeroMinimo)|| isNaN(numeroMaximo)) {
        alert('Preencha todos os campos!');
    } else if(quantidadeDeNumeros > numeroMaximo) {
        alert('A quantidade não pode ser maior que o número máximo!')
    } else if(numeroMaximo < numeroMinimo) {
        alert('O número mínimo não pode ser maior que o número máximo!')
    } else {
        for(let i = 1; i <= quantidadeDeNumeros; i++) {
            let numeroSorteado = sorteadorDeNumeroAleatorio(numeroMinimo, numeroMaximo);
            if(numerosSorteados.includes(numeroSorteado)) {
                i--;
            } else {
                numerosSorteados.push(numeroSorteado);
            }
        }
    
        document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
        alternarBotao(document.getElementById('btn-sortear'));
        alternarBotao(document.getElementById('btn-reiniciar'));
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:</label>'
    alternarBotao(document.getElementById('btn-sortear'));
    alternarBotao(document.getElementById('btn-reiniciar'));
}