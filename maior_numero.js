

function MaiorNumeros(primeiro_n, segundo_n, terceiro_n) {
    var n1 = primeiro_n
    var n2 = segundo_n
    var n3 = terceiro_n
    var diferenca = ''
    if(n1 > n2) {
        if(n1 > n3) {
            diferenca = 'Primeiro valor: ' + n1.toString();
            if(n2 == n1) {
                diferenca = diferenca + ' *** NOTA: Segundo valor  e igual ao Primeiro valor*** ';
            }
        }
        else {
            diferenca = 'Terceiro valor: ' + n3.toString();
            if(n1 == n3) {
                diferenca = diferenca + ' *** NOTA: Primeiro valor e igual ao Terceiro valor*** ';
            }
            if(n2 == n3) {
                diferenca = diferenca + ' *** NOTA: Segundo valor e igual ao Terceiro valor*** ';
            }
        }    
    }
    else{
        if(n2 > n3) {
            diferenca = 'Segundo valor: ' + n2.toString();
            if(n2 == n1) {
                diferenca = ds_retorno + ' *** NOTA: Segundo valor e igual ao Primeiro valor*** ';
            }
        }
        else {
            diferenca = 'Terceiro valor: ' + n3.toString();
            if(n1 == n3) {
                diferenca= diferenca + ' *** NOTA: Primeiro valor e igual ao Terceiro valor *** ';
            }
            if(n2 == n3) {
                diferenca = diferenca + ' *** NOTA: Segundo valor  e igual ao Terceiro valor *** ';
            }

        }    
    }
    
    return diferenca;    
}