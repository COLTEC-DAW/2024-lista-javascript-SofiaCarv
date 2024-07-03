let num1 = prompt("Digite o primeiro número do intervalo:");
let num2 = prompt("Digite o segundo número do intervalo:");

function min(num1, num2) {
    return (num1 < num2) ? num1 : num2;
}

function max(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

console.log(max(num1, num2));
console.log(min(num1, num2));
