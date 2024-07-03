function imprimirTabuleiro() {
    let linha = '';
    let numLinhas = prompt("Digite a quantidade de linhas desejadas para o tabuleiro de xadrez:");

    for (let i = 0; i < numLinhas; i++) {
        for (let j = 0; j < numLinhas; j++) {
            if ((i + j) % 2 === 0) {
                linha += '#';
            } else {
                linha += ' ';
            }
        }
        console.log(linha);
        linha = '';
    }
}
imprimirTabuleiro();