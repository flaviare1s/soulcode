// Exercício 1: Escreva uma função que receba um array de números e retorne um novo array contendo apenas os números pares.
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function retornarPares(array) {
  return array.filter((numero) => numero % 2 === 0)
}

console.log(retornarPares(numeros))


// Exercício 2: Escreva uma função que receba um array de números e retorne a soma de todos os números.
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function somarValores(array) {
  return array.reduce((acc, valor) => {
    return acc + valor
  },0)
}

console.log(somarValores(valores))

// Exercício 3: Escreva uma função que verifique se uma string é um palíndromo (ou seja, a string é igual quando lida de trás para frente). ARARA -> Palíndromo.
function ehPalindromo(string) {
  return string === string.split('').reverse().join('')
}

console.log(ehPalindromo('arara'))

// Exercício 4: Escreva uma função que conte o número de vogais em uma string. Dica: Você pode usar um array com todas as vogais possíveis e verificar cada letra da string para ir contando.
let frase = 'Quantas vogais existem nessa frase?'
const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', 'à', 'á', 'ã', 'â', 'é', 'ê', 'í', 'ó', 'õ', 'ú']
let soma = 0

function contarVogais(string) {
  for(let i = 0; i < string.length; i++) {
    if(vogais.includes(string[i])) {
      soma += 1
    }
  }
  return soma
}

console.log(contarVogais(frase))

// Exercício 5: Escreva uma função que receba um array de números e retorne o menor número do array.
let numerais = [2, 54, 80, 4, 27, 123, 55, -3, 0, 99]

function menorNumero(array) {
  let menor = numerais[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = numerais[i]
    }
  }
  return menor
}

console.log(menorNumero(numerais))

// Exercício 6: Escreva uma função que calcule a média dos números em um array. [7.0, 8.0, 9.0] -> (7.0 + 8.0 + 9.0) / 3
let notas = [7.0, 8.0, 9.0]

function calcularMedia(array) {
  let soma = array.reduce((acc, nota) => {
    return acc + nota
  },0)
  return soma / array.length
}

console.log(calcularMedia(notas))

// Exercício 7: Escreva uma função que conte a frequência de cada caractere em uma string. Dica: use objetos para guardar as contagens de cada caractere.
function frequenciaCaractere(string) {
  let contagem = {}
  for(let i = 0; i < string.length; i++) {
    let caractere = string[i]
    if(!contagem[caractere]) {
      contagem[caractere] = 1
    } else {
      contagem[caractere] += 1
    }
  }
 return contagem
} 

console.log(frequenciaCaractere('batata'))

// Exercício 8: Escreva uma função que recebe um email, e ofusca parte do seu endereço. Por exemplo: jose.almir@dev.com -> j*********@dev.com.
let email = 'jose.almir@dev.com'

function ofuscarEmail(email) {
  let emailSeparado = email.split('@')
  let primeiraParte = emailSeparado[0]
  let segundaParte = emailSeparado[1]

  let nomeOfuscado = primeiraParte.slice(0, 1) + '*'.repeat(primeiraParte.length - 1)

  let emailOfuscado = `${nomeOfuscado}@${segundaParte}`
  
  return emailOfuscado
}

console.log(ofuscarEmail(email))
