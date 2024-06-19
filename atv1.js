function criarForma(){
    var num = prompt ("Digite a quantidade de linhas");
        for (let i=1; i<=num; i++){
            let linha = '\n';
            
            for (let j = 0; j < i; j++) {
            linha += ('#');
            }
        console.log(linha);
        }
    }
    
    criarForma();