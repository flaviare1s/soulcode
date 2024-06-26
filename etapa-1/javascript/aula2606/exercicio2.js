// 1. Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.
function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc
}

function statusIMC(imc) {
  if (imc < 18.5) {
    console.log('Baixo peso')
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso adequado')
  } else if (imc > 24.9 && imc <= 29.9) {
    console.log('Sobrepeso')
  } else if (imc > 29.9 && imc <= 34.9) {
    console.log('Obesidade grau 1')
  } else if (imc > 34.9 && imc <= 39.9) {
    console.log('Obesidade grau 2')
  } else if (imc > 39.9) {
    console.log('Obesidade grau 3')
  } else {
    console.log('Digite valores válidos')
  }
}

let imc1 = calcularIMC(44, 1.51)

statusIMC(imc1)


// 2. Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%
function porcentagem(numero) {
  if (numero >= 0 && numero <= 1) {
    return (numero * 100).toFixed(1) + '%'
  } else {
    return 'Erro. Digite um valor válido.'
  }
}

let porcentagem1 = porcentagem(0.5)
console.log(porcentagem1)

let porcentagem2 = porcentagem(2)
console.log(porcentagem2)


// 3. Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true
function ehNegativo(valor) {
  return valor < 0
}

console.log(ehNegativo(3))
console.log(ehNegativo(-3))


// 4. Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.
function contar(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

contar(5)


// 5. Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Flávia', 'Reis'))


// 6. Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.
function areaCirculo(raio) {
  let area = 3.14 * (raio * raio)
  
  return area
}

console.log(areaCirculo(3))


// 7. Crie uma função que recebe a área de um circulo e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido
function nivelCirculo(raio) {
  let area = 3.14 * (raio * raio)
  if (area >= 1 && area <= 20) {
    return 'Nível I'
  } else if (area >= 21 && area <= 40) {
    return 'Nível II'
  } else {
    return 'Nível inválido'
  }
}

console.log(nivelCirculo(3))


// 8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
function minúsculas(string) {
  return string.toLowerCase()
}

console.log(minúsculas('Teste'))


// 9. Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.
function quantasVezes(palavra, caractere) {
  let contador = 0
  for (let i = 0; i < palavra.length; i++) {
    if(palavra[i] === caractere) {
      contador++
    }
  }
  return contador
}

console.log(quantasVezes('batataaaaa', 'a'))
