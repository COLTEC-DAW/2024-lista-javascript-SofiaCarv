function criptografar(str, algoritmo) {
    let textoCriptografado = [];

    for (let i = 0; i < str.length; i++) {
        textoCriptografado.push(algoritmo(str[i]));
    }
    return textoCriptografado.join('');
}

function cifraDeSubstituicao(char) {
    const deslocamento = 3;
    const codigoCaractere = char.charCodeAt(0);
    
    if (char >= 'A' && char <= 'Z'){
        return String.fromCharCode((codigoCaractere - 65 + deslocamento) % 26 + 65); 
    }

    else if (char >= 'a' && char <= 'z'){
        return String.fromCharCode((codigoCaractere - 97 + deslocamento) % 26 + 97); 
    }

    return char; 
}

let mensagemOriginal = prompt("Digite uma palavra:");

console.log("Mensagem original: ", mensagemOriginal);
console.log("Mensagem criptografada: ", criptografar(mensagemOriginal, cifraDeSubstituicao));


