function contandoCaracter(frase, c) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === c) {
            contador++;
        }
    }
    return contador;
}

frase = prompt("Escreva a palavra:");
c = prompt("Escreva o caractere que quer contar:");


console.log(contandoCaracter(frase, c));