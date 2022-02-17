
let a =parseInt(prompt('Insira o valor de A'))
let b =parseInt(prompt('Insira o valor de B'))

alert(`Valor de A =${a} e o valor de B =${b}`)

let c = a

a = b
b = c

alert(`O valor de A= ${a} e o valor de B = ${b}`)