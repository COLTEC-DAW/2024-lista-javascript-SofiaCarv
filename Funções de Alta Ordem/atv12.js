function bubbleSort(vetor, comparar) {
    const n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (comparar(vetor[j], vetor[j + 1]) > 0) {
                [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
            }
        }
    }
    return vetor;
}

const crescente = (a, b) => a - b;
const decrescente = (a, b) => b - a;
const imparesCrescente = (a, b) => {
    if (a % 2 !== 0 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 !== 0) return 1;
    return a - b;
}
const paresDecrescente = (a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return -1;
    if (a % 2 !== 0 && b % 2 === 0) return 1;
    return b - a;
}

let vetor = [5, 2, 9, 1, 5, 6, 3];

console.log("Vetor original:", vetor);
console.log("Ordenação crescente:", bubbleSort(vetor, crescente));
console.log("Ordenação decrescente:", bubbleSort(vetor, decrescente));
console.log("Ordenação crescente de ímpares e decrescente de pares:", bubbleSort(vetor, imparesCrescente));
console.log("Ordenação decrescente de pares e crescente de ímpares:", bubbleSort(vetor, paresDecrescente));
