let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    alert('Verifique o Prompt "F12"')
    console.log('O botão foi clicado!')
}

function exibirAlerta() {
    alert('Eu amo JS')
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somaDoisNumeros() {
    let numeroUm = parseInt(prompt('Digite o primeiro número'))
    let numeroDois = parseInt(prompt('Digite o segundo número'))
    let resultado = numeroUm + numeroDois
    alert(`O resultado da soma ${numeroUm} + ${numeroDois} é igual à ${resultado}`)
}