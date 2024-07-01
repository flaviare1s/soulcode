// Escreva uma função que receba um e-mail e ofusque parte de seu endereço.
// Por exemplo: jose.almir@dev.com -> j**********@dev.com

const ofuscarEmail = (email) => {
  // Desestruturação do array:
  // o valor do índice 0 é armazenado na variável usuario
  // o valor do índice 1 é armazenado na variável dominio
  const [usuario, dominio] = email.split('@')

  return usuario[0] + '**********' + '@' + dominio
}

console.log(ofuscarEmail('jose.almir@dev.com'))

// Exemplo de desestruturação de arrays:
const [nome1, nome2, nome3, nome4] = ['Almir', 'Gabriel', 'Victor', 'Igor']

console.log(nome3)


// Escreva uma função que conte a frequência de cada caractere em uma string.
// Dica: use objetos para guardar as contagens de cada caractere.
function contarCaracteres(str) {
  const contagem = {}

  for(let caractere of str) {
    contagem[caractere] = 0
  }

  for(let caractere of str) {
    contagem[caractere]++
  }

  console.log(contagem)
}

contarCaracteres('batata')


// Escreva uma função que verifica se uma função é um palíndromo:
function palindromo(str) {
  strInvertida = str.split('').reverse().join('')

  return str.toLowerCase() === strInvertida.toLowerCase()
}

console.log(palindromo('Arara'))


// Escreva uma função que conte o número de vogais numa string:
function contagemVogais(palavra) {
  const vogais = ['a', 'e', 'i', 'o', 'u', 'à', 'á', 'ã', 'â', 'é', 'ê', 'í', 'ó', 'õ', 'ú']
  let contagem = 0
  const palavraLower = palavra.toLowerCase()

  for(let letra of palavraLower) {
    if(vogais.includes(letra)) {
      contagem++
    }
  }

  return contagem
}

console.log(contagemVogais('batata'))
