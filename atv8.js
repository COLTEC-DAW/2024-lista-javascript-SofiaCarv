num1 = parseInt(prompt ("Digite o menor número:"));
num2 = parseInt(prompt ("Digite o maior número:"));
intervalo  = parseInt(prompt ("Digite o intervalo de variação entre os números:"));

function range(min,max, intervalo){
    for(let i = min; i <= max; i += intervalo){
        console.log(i);
    }
}
console.log(range(num1, num2, intervalo));

