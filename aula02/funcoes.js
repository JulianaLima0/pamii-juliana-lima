let num1 = 2
const num2 = 3

function soma() {
    num1 + num2
}

console.log(soma())

num1 = 6
//num2 = 9
     //sobrescrito
     //dá erro na const (num2) porque ela não muda, vamos deixar comentada

console.log(soma())

const funcaoSoma = (a, b) => {
    return a + b
}

console.log(funcaoSoma(10, 8))
     //tem que definir o valor no parênteses

console.log(funcaoSoma(32, 75))
