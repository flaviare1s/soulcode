// 1. Defina 3 variáveis com notas de 0 a 10. Calcule a média das três notas. Em seguida mostre no console o status do aluno:
// Maior ou igual 7 = Aprovado
// Entre 5 e 7 = Reforço
// Menor que 5 = Reprovação
const nota1 = 8
const nota2 = 6.6
const nota3 = 9
const media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
  console.log('Aprovado')
  } else if (media >= 5 && media < 7) {
    console.log('Reforço')
  } else {
    console.log('Reprovado')
  }


// 2. Simule a tabela do IMC com base no valor calculado pela formula: IMC = PESO / (ALTURA x ALTURA).
// Indique o status com base no valor do IMC.
let peso = 44
let altura = 1.51
let imc = peso / (altura * altura)

console.log(imc)

if (imc <= 18.5) {
  console.log('Baixo peso')
} else if (imc > 18.5 && imc <= 24.9) {
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


// 3. Defina um número a e um número b. Verifica qual o maior, ou menor, ou se são iguais!

let a = 5
let b = 3

if (a > b) {
  console.log(`${a} é o maior número e ${b} é o menor número!`)
} else if (a < b) {
  console.log(`${a} é o menor número ${b} é o maior número!`)
} else {
  console.log('Os números são iguais!')
}


// 4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
let salario = 2100
let quantidadeDependentes = 6

if(quantidadeDependentes === 0) {
  console.log(`Sem ajustes salariais. Salário = R$${salario}`) 
}  else if (quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
  console.log(`Salario = ${salario * 1.3}`)
} else {
  console.log(`Salario = ${salario * 1.4}`)
}


// 5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 - Sábado). Com base no valor indique se é final de semana ou dia útil.
 let diaSemana = 2

if (diaSemana === 1 || diaSemana === 7) {
  console.log('Final de semana!') 
} else if (diaSemana > 1 && diaSemana < 7) {
  console.log('Dia útil!')
} else {
  console.log('Digite um valor válido!')
}

// 6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bissexto quando: 
// Caso 1) É um número divisível por 4, mas não é divisível por 100. 
// Caso 2) É um número divisível por 4, por 100 e por 400.

let ano = 2020

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0)) {
  console.log(`${ano} é bissexto`)
} else {
  console.log(`${ano} não é bissexto`)
}

// 7. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.

let idade = 20

if (idade < 0 || idade > 130) {
  console.log('Digite uma idade válida!')
} else {
  console.log(`Idade = ${idade}`)
}

// 8. Crie uma variável com o turno de aula: M-matutino ou V-Vespertino ou N- Noturno. Mostre a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

let turnoAula = 'M'

if(turnoAula === 'M') {
  console.log('Bom Dia!')
} else if (turnoAula === 'V') {
  console.log('Boa Tarde!')
} else if (turnoAula === 'N') {
  console.log('Boa Noite!')
} else {
  console.log('Valor inválido!')
}
