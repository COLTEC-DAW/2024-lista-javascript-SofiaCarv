let frase = prompt("Digite uma frase para reverte-la:");

function reverseArray(array){
    let reverso = '';
    for (let i = array.length - 1; i >= 0; i--) {
        reverso += array[i];
    }
    return reverso;
}
let fraseReversa = reverseArray(frase);
console.log(fraseReversa);

