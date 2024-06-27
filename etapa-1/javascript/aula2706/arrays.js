// Array => armazena múltiplos valores/itens/elementos em uma variável
// [] => array vazio
// [1, 2, 3, 4, 5] => array com 5 itens

let figuras = ['coração', 'estrela', 'ok', 'não', 'joinha', 'sorriso']
console.log(figuras) // mostra os itens do array

let numeros = [1, 3.2, 5.4, 7.5, 9]
console.log(numeros)

// Acessando um item do array:
console.log(figuras[1])
console.log(figuras[5].toUpperCase())
console.log(numeros[4])
console.log(numeros[1000]) // vai retornar undefined

// Alterando um item do array:
let notas = [6.5, 8.0, 9.0]
console.log(`Antes: ${notas}`)
notas[0]++
notas[1] = 8.5
notas[2] = notas[2] + 0.5
console.log(`Depois: ${notas}`) // O array foi modificado

// Tamanho do array:
let arr1 = []
let arr2 = [1, 2, 3, 4]

console.log(arr1.length)
console.log(arr2.length)

// Percorrendo um array:
for (let i = 0; i < arr2.length; i++) {
  console.log(i)
}

let alunos = ['João', 'Maria', 'Josefina', 'Joaquim']
for (let i = 0; i < alunos.length; i++) {
  console.log(`O aluno ${i} é ${alunos[i]}`)
}

// For Of: (mostra o elemento)
let frutas = ['abacaxi', 'laranja', 'manga', 'abacate']
for (let fruta of frutas) {
  console.log(fruta)
}

// For In: (mostra o índice)
for (let i in frutas) {
  console.log(i)
}
