// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
function alunosFaltantes(listaTurma, listaPresenca) {
  return listaTurma.filter((aluno) => !listaPresenca.includes(aluno))
}

let listaTurma1 = ['Maria', 'Janaína', 'Pedro', 'Leandro', 'Ana']
let listaPresenca1 = ['Maria', 'Pedro', 'Ana']

console.log(alunosFaltantes(listaTurma1, listaPresenca1))

console.log('==========')


// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
let numeros = ['1', '2', '3']

function quadrado(arrayNumeros) {
  return arrayNumeros.map((numero) => numero ** 2)
}

console.log(quadrado(numeros))

console.log('==========')


// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
let arquivos = ['documento.txt', 'imagem.jpeg', 'programa.exe', 'video.mp4', 'foto.jpeg']

function arquivosDeImagem(arrayArquivos, extensão) {
  return arrayArquivos.filter((arquivo) => arquivo.endsWith(extensão))
  .map((arquivo) => arquivo.slice(0, arquivo.lastIndexOf('.')))
}

console.log(arquivosDeImagem(arquivos, '.jpeg'))

console.log('==========')


// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let valor of valores) {
  console.log(valor)
}

for (let i = 0; i < valores.length; i++) {
  console.log(valores[i])
}

console.log('==========')


// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
let frutas = ['abacaxi', 'laranja', 'manga', 'abacate']

function maisDeCincoLetras(arrayStrings) {
  return arrayStrings.filter((string) => string.length > 5)
}

console.log(maisDeCincoLetras(frutas))

console.log('==========')


// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
let numerais = [2, 54, 80, 4, 27, 123, 55]

function maiorNumero(numerais) {
  let maior = numerais[0]
  for (let i = 0; i < numerais.length; i++) {
    if (numerais[i] > maior) {
      maior = numerais[i]
    }
  }
  return maior
}

console.log(maiorNumero(numerais))

console.log('==========')


// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function digitosVerificadores(cpf) {
  return cpf.slice(-2)
}

console.log(digitosVerificadores('056.985.990-23'))

console.log('==========')


// 8. Crie uma função que inverte uma string. Retorna ela invertida.
let palavra = 'batata'

function inverterPalavra (string) {
   return string.split('').reverse().join('')
}

console.log(inverterPalavra(palavra))

console.log('==========')


// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
function repetirPalavra(palavra, quantidade) {
  let resultado = ''
  for (let i = 0; i < quantidade; i++) {
    resultado += palavra
  }
  return resultado
}

console.log(repetirPalavra('batata', 3))

console.log('==========')


// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.

function saoIguais(str1, str2) {
  return str1 === str2
}

console.log(saoIguais('batata', 'batata'))
console.log(saoIguais('batata', 'cenoura'))

console.log('==========')


// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
function formatarData(array, separador) {
  return array.join(separador)
}

console.log(formatarData([20, 6, 2000], '/'))

console.log('==========')


// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'
let comida = ['abacaxi', 'laranja', 'manga', 'abacate']

function busca(array, valorBusca, valorPadrao) {
  if (array.includes(valorBusca))
    return valorBusca
  else
    return valorPadrao
}

console.log(busca(comida, 'batata', 'não tem batata'))
