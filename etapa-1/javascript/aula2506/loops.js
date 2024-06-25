// Estruturas de repetição = loops = laços
// Essas estruturas possuem:
  // Condição de parada
  // Valor inicial (variável de controle, contador)
  // Incremento (atualização)

// While
// While = Enquanto
  /* 
    While (condição) { 
      Enquanto a condição for verdadeira, o bloco de comando dentro do while vai ser executado
    } 
  */

let numero = 0

while(numero <= 100) {
  console.log(numero)
  numero++
}

let numero2 = 0
while(numero2 <= 50) {
  console.log(numero2)
  numero2 += 5
}

let numero3 = 10

while(numero3 >= 0) {
  console.log(numero3) 
  numero3--
}

let soma = 0
let i = 1
while (i <= 10) {
  soma = soma + i
  i++
}
console.log(soma)
