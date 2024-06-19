function verificarPalindromo(palavra) {

    var palavra = prompt ("Escreva uma palavra para verificar se é um palíndromo");

    palavra = palavra.toLowerCase().replace(/\s/g, '');
    
    let palavraInvertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    
    let ehPalindromo = true;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] !== palavraInvertida[i]) {
            ehPalindromo = false;
        }
    }
    
    return ehPalindromo;
}
verificarPalindromo();
