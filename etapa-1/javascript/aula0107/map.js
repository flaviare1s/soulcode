// Map = cria um novo array com os resultados da função aplicada em cada elemento:
const numeros = [3, 4, 9, 10]

const quadrado = numeros.map((n) => n**2)

console.log(quadrado)


const nomes = ['josé', 'maria', 'joão', 'carlos']

const maiusculas = nomes.map((nome) => nome.toLocaleUpperCase())
const nomesExclamacao = nomes.map((nome) => nome + '!')

console.log(maiusculas)
console.log(nomesExclamacao)

// Exemplo: Use o map para transformar os valores do array abaixo.
// Se o numero for par faz valor * 2 e, se for impar, faz valor / 2
const valores = [1, 2, 3, 4, 5, 6, 7]

const resultado = valores.map((valor) => {
  if(valor % 2 === 0) {
    return valor * 2
  } else {
    return valor / 2
  }
})

console.log(resultado)
