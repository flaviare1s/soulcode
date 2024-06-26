/*
  function nomeDaFuncao(parâmetros) {
    bloco de instruções
  }
*/

// Declaração de função
function boasVindas() { // Escopo da função
  console.log('Bem-vindo(a) a SoulCode!')
  console.log('!!!!!!!!!!')
}

// Execução da função
boasVindas()


let a = 200
let c = 20

function exemplo02() {
  let a = 5
  let b = 10

  console.log(`A soma é ${a + b + c}`) // escopo da função
}

exemplo02()

console.log(a) // escopo global


// Função sem parâmetros:

let num1 = 2
let num2 = 5

function exemplo03() {
  console.log(`A soma é ${num1 + num2}`)
}

exemplo03()

// Parâmetros
function soma(a, b) {
  console.log(`A soma entre ${a} e ${b} é ${a + b}`)
}

soma(2, 5) // A soma entre 2 e 5 é 7
soma() // A soma entre undefined e undefined é NaN

function media(n1, n2, n3) {
  let resultado = (n1 + n2 + n3) / 3
  console.log(`A média é ${resultado.toFixed(2)}`)

  // Retorno = saída de uma função
  return resultado
}

let mediaAluno1 = media(10.0, 9.5, 8.2)
let mediaAluno2 = media(7.5, 8.5, 9.5)
let mediaAluno3 = media(5.8, 7.3, 5.0)


console.log('Valores retornados:')
console.log(mediaAluno1.toFixed(2))
console.log(mediaAluno2.toFixed(2))
console.log(mediaAluno3.toFixed(2))

let mediaTurma = media(mediaAluno1, mediaAluno2, mediaAluno3)

console.log(`A média da turma é ${mediaTurma.toFixed(2)}`)



function calcularIMC(peso, altura) {
  let imc = peso / (altura * altura)
  return imc
}

let imcPessoa1 = calcularIMC(70, 1.75)
let imcPessoa2 = calcularIMC(60, 1.80)

console.log(`O IMC da pessoa 1 é ${imcPessoa1.toFixed(2)}`)
console.log(`O IMC da pessoa 2 é ${imcPessoa2.toFixed(2)}`)


// Outro jeito de fazer a função é retornando direto:
function calcularIMC2(peso, altura) {
  return peso / (altura * altura)
}


