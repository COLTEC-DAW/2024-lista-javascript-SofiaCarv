function toList(array) {
    let list = {
        value: array[0],
        rest: null
    };

    let node = list;

    for (let i = 1; i < array.length; i++) {
        node.rest = {
            value: array[i],
            rest: null
        }

        node = node.rest;
    }

    return list;
}
var userInput = prompt("Digite os números da lista (SEPARADO POR VÍRGULAS) ");

    var inputArray = userInput.split(",").map(Number);
    var list = toList(inputArray);
    console.log(JSON.stringify(list, null, 2));