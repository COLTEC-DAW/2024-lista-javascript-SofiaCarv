function transformaString(string, fnTransformacao) {
    let caracteres = string.split("");

    for (let i = 0; i < caracteres.length; i++) {
        caracteres[i] = fnTransformacao(caracteres[i]);
    }

    return caracteres.join("");
}

function transformaParaMaiusculaSeVogal(caractere) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (vogais.includes(caractere)) {
        return caractere.toUpperCase();
    }
    return caractere;
}

function transformaParaMaiusculaSeConsoante(caractere) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (!vogais.includes(caractere) && /[a-zA-Z]/.test(caractere)) {
        return caractere.toUpperCase();
    }
    return caractere;
}

function transformaParaMinusculaSeVogal(caractere) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (vogais.includes(caractere)) {
        return caractere.toLowerCase();
    }
    return caractere;
}

function transformaParaMinusculaSeConsoante(caractere) {
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    if (!vogais.includes(caractere) && /[a-zA-Z]/.test(caractere)) {
        return caractere.toLowerCase();
    }
    return caractere;
}

let palavra = prompt("Digite uma palavra ou frase:");

console.log("Original:", palavra);
console.log("Transformada com vogais em maiúscula:", transformaString(palavra, transformaParaMaiusculaSeVogal));
console.log("Transformada com consoantes em maiúscula:", transformaString(palavra, transformaParaMaiusculaSeConsoante));
console.log("Transformada com vogais em minúscula:", transformaString(palavra, transformaParaMinusculaSeVogal));
console.log("Transformada com consoantes em minúscula:", transformaString(palavra, transformaParaMinusculaSeConsoante));
