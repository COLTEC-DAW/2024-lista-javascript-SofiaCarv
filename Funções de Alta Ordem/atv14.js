function verificarNumero(numero, condicao) {
    return condicao(numero);
}

function ehImpar(numero) {
    return numero % 2 !== 0;
}

function ehPrimo(numero) {
    if (numero <= 1) return false; 
    if (numero === 2) return true; 

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true; 
}

let numero = prompt("Digite um número inteiro:");
numero = parseInt(numero);

console.log("O número é impar? ", verificarNumero(numero, ehImpar));
console.log("O número é primo? ",verificarNumero(numero, ehPrimo));
