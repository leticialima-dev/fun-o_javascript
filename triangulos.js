function triangulo( varA, varB, varC){

    var lado1 = varA;
    var lado2 = varB;
    var lado3 = varC;

    if(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado1+lado2)){//  soma L2 e L3 precisa ser menor que L1

            if(lado1 == lado2 && lado2 == lado3){
              return "tringulo equilátero";
            }else if (lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
                return "triângulo isóceles";
            }else {
                return " triângulo escaleno";
            }

        }else{
            return "não formam um triângulo";

        }


    }