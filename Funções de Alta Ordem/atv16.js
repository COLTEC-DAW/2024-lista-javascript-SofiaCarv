function criarMatriz(dimensao, funcaoMatricial) {
    let matriz = [];
  
    for (let i = 0; i < dimensao; i++) {
        matriz[i] = [];
        for (let j = 0; j < dimensao; j++) {
            matriz[i][j] = funcaoMatricial(i, j);
        }
    }
  
    return matriz;
}

function soma(i, j) {
    return i + j;
}

function produto(i, j) {
    return i * j;
}

function identidade(i, j) {
    return i === j ? 1 : 0;
}

function formula(i, j) {
    return i ** 2 / (j + 1);
}

function compara(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

// Testes das funções matriciais usando a função principal
console.log("Matriz com base na função Soma:");
console.log(criarMatriz(5, soma));

console.log("\nMatriz com base na função Produto:");
console.log(criarMatriz(5, produto));

console.log("\nMatriz com base na função Identidade:");
console.log(criarMatriz(5, identidade));

console.log("\nMatriz com base na função Fórmula:");
console.log(criarMatriz(5, formula));

console.log("\nMatriz com base na função Comparação:");
console.log(criarMatriz(5, compara));


