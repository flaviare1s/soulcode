// 1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
let numero = 0

while(numero <= 10) {
  console.log(numero)
  numero +=2
}


// 2. Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// ...
// 7 x 10 = 70

let numero2 = 1
while(numero2 <= 10) {
  let resultado = numero2 * 7 
  numero2++
  console.log(`7 x ${numero2 - 1} = ${resultado}`)
}


// 3. Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

let soma = 0
let numero3 = 1

while (numero3 < 1000) {
  if(numero3 % 2 !== 0) {
    soma = numero3 + soma
  }
  numero3++
}
console.log(soma)


// 4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.
let numero4 = 1
let total = 0

while(numero4 <= 1000) {
  if(numero4 % 9 === 0) {
    console.log(numero4)
    total++
  }
  numero4++
}

console.log('Total de números divisíveis por 9:', total)
