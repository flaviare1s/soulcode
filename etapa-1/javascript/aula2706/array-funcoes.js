let nums = []
console.log(nums)

// Adicionando itens no final do array:
nums.push(1)
nums.push(2)
nums.push(3)
console.log(nums)

// Removendo o último item do array:
nums.pop()
console.log(nums)

// Inserindo itens no início do array:
let notas = [6.5, 8.0, 9.0]
console.log(notas)
notas.unshift(5.0)
console.log(notas)

// Removendo o primeiro item do array:
notas.shift()
console.log(notas)

// Juntar o array e montar uma string:
let alunos = ['João', 'Maria', 'Josefina', 'Joaquim']
let str = alunos.join(' e ')
console.log(str)

let enderecoIP = [192, 168, 0, 10]
console.log(enderecoIP.join('.'))

let data = ['27', '06', '2024']
let dataString = data.join('/')
console.log(dataString)

// Concatenando arrays:
let p1 = ['Mouse', 'Teclado', 'Webcam']
let p2 = ['Monitor', 'Impressora']
let p3 = p1.concat(p2)
console.log(p3)

// Array reverso:
let n = [1, 2, 3, 4, 5]
let nInvertido = n.reverse()
console.log(nInvertido)

// Includes:
let pessoas = ['João', 'Maria', 'Josefina', 'Joaquim']
if (pessoas.includes('Joaquim')) {
  console.log('Joaquim está presente')
} else {
  console.log('Joaquim não está presente')
}

// Split:
let frase = 'Eu vou estudar React'
let dataInicio = '26/06/2024'
let palavraEspecial = 'BATATA'

let fraseArray = frase.split(' ')
console.log(fraseArray)

let dataArray = dataInicio.split('/')
console.log(dataArray)


// Invertendo a palavra:
let palavraArray = palavraEspecial.split('').reverse().join('')
console.log(palavraArray)

// IndexOf:
let figuras = ['coração', 'estrela', 'ok', 'não', 'joinha', 'sorriso']

console.log(figuras.indexOf('coração')) // retorna o índice do elemento
console.log(figuras.indexOf('batata')) // retorna -1 se o elemento não existir

// Recortar um array:
let subArray = figuras.slice(1, 4)  
console.log(subArray) // retorna um novo array com os itens selecionados

let fig1 = figuras.slice(3, 6)
console.log(fig1)

let fig2 = figuras.slice(3) // seleciona todos os itens a partir do índice 3
console.log(fig2) 


let fig3 = figuras.slice(3, figuras.length) // seleciona todos os itens a partir do índice 3
console.log(fig3)

// Último elemento do array:
console.log(figuras.slice(-1))
console.log(figuras[figuras.length - 1])
