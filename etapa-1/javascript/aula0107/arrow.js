// Declaração de function:
function soma(a, b) {
  return a + b
}

let resultado = soma(10, 5)
console.log(resultado)

// Arrow function:
const somaArrow = (a, b) => a + b

let resultadoArrow = somaArrow(5,20)
console.log(resultadoArrow)

// Arrow com corpo:
const checarPar = (num) => {
  if(num % 2 === 0) {
    console.log(`O número ${num} é par`)
    return true
  } else {
    console.log(`O número ${num} não é par`)
    return false
  }
}

checarPar(10)
console.log(checarPar(7))


// Transformando em arrow:
// function compararString(st1, st2) {
//   return st1 === st2 }


const compararString = (str1, str2) => str1 === str2

console.log(compararString('batata', 'batata'))


// Usando uma função em outra:
const testeFuncao = () => 2 * soma(5, 4)
console.log(testeFuncao())


// // Exercício: Converter a função abaixo em arrow
// function extrairDigitosVerificadores(cpf) {
//   const partesCpf = cpf.split("-");
//   return partesCpf[1]; }

const extrairDigitosVerificadores = (cpf) => {
  const partesCpf = cpf.split('-')
  return partesCpf[1]
}

console.log(extrairDigitosVerificadores('543.813.910-23'))


// For Each => executa uma função para cada elemento do array:
const numeros = [1, 2, 3, 4, 5, 6, 7]

numeros.forEach((numero, indice) => {
  console.log(`O índice do número ${numero} é ${indice}`)
})


// Exemplo: somar todos os números do array:
 let total= 0

 numeros.forEach(numero => total += numero)
 
 console.log(total)

// Outro exemplo de For Each:
// Exemplo: Converter a função abaixo em arrow e o for em forEach
// function filtrarStrings(arr) {
//     let stringsFiltradas = [];

//     for(let str of arr) {
//         if(str.length > 5) {
//             stringsFiltradas.push(str);
//         }
//     }

//     return stringsFiltradas;
// }

let array = ['batata', 'pera', 'uva', 'banana', 'beterraba', 'tomate']

const filtrarStrings = (array) => {
  let stringsFiltradas = []
  array.forEach((str => {
    if(str.length > 5) {
      stringsFiltradas.push(str)
    }
  }))
  return stringsFiltradas
}

console.log(filtrarStrings(array))
