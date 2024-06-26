// Strings = cadeias de caracteres

const nome = 'Almir'
const sobrenome = 'Santos'

// Interpolação de strings
const nomeCompleto = `${nome} ${sobrenome}`

console.log(nomeCompleto)

// Formação de strings
let meuPet = 'Toisinha'
// 0 -> 'T'
// 1 -> 'o'
// 2 -> 'i'
// 3 -> 's'
// 4 -> 'i'
// 5 -> 'n'
// 6 -> 'h'
// 7 -> 'a'
console.log(meuPet[0])

let comida = 'Batata Assada' // Índices 0 a 12
console.log(comida[0]) // B
console.log(comida[1]) // a
console.log(comida[2]) // t
console.log(comida[3]) // a
console.log(comida[4]) // t
console.log(comida[5]) // a
console.log(comida[6]) // espaço em branco
console.log(comida[7]) // A
console.log(comida[comida.length - 1]) // último caractere da string


//Tamanho da string
console.log(comida.length) // Total de caracteres da string

// Percorrendo uma string
for (let i = 0; i < comida.length; i++) {
  console.log(comida[i]) // Mostra um caractere por vez
}

// Funções de strings:
let palavra = 'JavaScript'
console.log(palavra.toLocaleLowerCase()) // transforma todas as letras em minúsculas / não altera a string original
console.log(palavra.toLocaleUpperCase()) // transforma todas as letras em maiúsculas / não altera a string original
console.log(palavra)

let palavraMinuscula = palavra.toLocaleLowerCase()
console.log(palavraMinuscula)

console.log(palavra.charAt(0)) // palavra[0]

console.log(palavra.replace('Java', 'Type')) // TypeScript
console.log(palavra.replace('a', 'x')) // JxvaScript
console.log(palavra.replaceAll('a', 'x')) // JxvxScript

let frase = 'Eu comi arroz, feijão, batata e soja'
console.log(frase.includes('soja')) // true
console.log(frase.includes('alface')) // false

if (frase.includes('alface')) {
  console.log('Muito bem!')
} else {
  console.log('Você precisa comer mais verduras!')
}

let arquivo = 'musica.mp3'

console.log(arquivo.endsWith('.mp3')) // true, pois arquivo termina com .mp3

console.log(arquivo.startsWith('musica')) // true

// Slice:
console.log(arquivo.slice(0, 6)) // recorta a string / musica
console.log(arquivo.slice(6, 10)) // recorta a string / .mp3


