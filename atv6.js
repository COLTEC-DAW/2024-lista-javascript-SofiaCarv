let num = prompt("Digite um número para realizar a divisão:");
let divisor = prompt("Digite um divisor:")

function mod2(num) {
    return num % 2 === 0;
    }

function mod(num, divisor){
        return num % divisor === 0;
    }

console.log(mod2(num));
console.log(mod(num, divisor));
