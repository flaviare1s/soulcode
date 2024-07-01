// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.
const maior = (num1, num2) => num1 > num2? num1 : num2

console.log(maior(8, 4))


// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.
let palavras = ['banana', 'abacaxi', 'laranja', 'morango', 'abacate', 'mamao', 'uva']

palavras.forEach((palavra, i) => {
  palavras[i] = palavra.charAt(0).toUpperCase() + palavra.slice(1)
})

console.log(palavras)


// 3. Use map para transformar um array de números, multiplicando cada número por 5.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const quintuplos = numeros.map(numero => numero * 5)

console.log(quintuplos)


// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.
let idades = [10, 12, 23, 30, 40, 58, 75, 80, 101]

const maiores = idades.filter(idade => idade >= 18)

console.log(maiores)


// 5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.
const livro = {
  titulo: 'Livro fictício',
  autor: 'Fulano de Tal',
  publicacao : {
    editora: 'Moderna',
    ano: 2010,
  }
}

console.log(livro.publicacao.editora)


// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
let frutas = ['banana', 'abacaxi', 'laranja', 'morango', 'abacate', 'mamao', 'uva']

const [fruta1, fruta2] = frutas

console.log(fruta1, fruta2)


// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.
// Respostas em outro arquivo: exercicios-adaptados.js
