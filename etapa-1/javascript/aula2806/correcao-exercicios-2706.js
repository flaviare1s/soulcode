// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
let turma = ['João Silva', 'Maria Santos', 'Jose Alves', 'Joaquim Ferreira', 'Ana Souza']
let presenca = ['João Silva', 'Maria Santos', 'Jose Alves', 'Joaquim Ferreira']

function listarAusentes(alunos, lista) {
  let ausentes = []

  for (let aluno of alunos) {
    if (!lista.includes(aluno)) {
      ausentes.push(aluno)
    }
  }
  return ausentes
}

let faltas = listarAusentes(turma, presenca)

console.log(faltas)


// 2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.
function elevarQuadrado(array) {
  let quadrado = []

  for (let n of array) {
    quadrado.push(n * n)
  }
  return quadrado
}

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let resultado = elevarQuadrado(valores)

console.log(resultado)


// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
function filtrarExtensao(arquivos, extensao) {
  let filtrados = []

  for(arquivo of arquivos) {
    if (arquivo.endsWith(extensao)) {
      filtrados.push(arquivo)
    }
  }
  return filtrados
}

let arquivosFiltrados = filtrarExtensao(['arquivo1.txt', 'arquivo2.jpeg', 'arquivo3.png', 'arquivo4.ex', 'arquivo5.txt'], '.txt')

console.log(arquivosFiltrados)


// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.
function exercicio04() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  console.log('Mostrando os números com for of:')
  for (let numero of numeros) {
    console.log(numero)
  }

  console.log('Mostrando os números com for comum:')
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
  }
}

exercicio04()


// 5. Crie uma função que recebe um array de strings como parâmetro e retorne um novo array apenas com as strings acima de 5 caracteres.
function filtrarSTrings(strings) {
  let stringsFiltradas = []

  for (let str of strings) {
    if (str.length > 5) {
      stringsFiltradas.push(str)
    }
  }
  return stringsFiltradas
}

let palavras = ['banana', 'manga', 'abacaxi', 'laranja', 'uva']

console.log(filtrarSTrings(palavras))


// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
function exercicio06() {
  let numeros = [1, 4, 9, 80, -100, 0, 49] 
  let maior = numeros[0]

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i]
    }
  }
  return maior
}

console.log(exercicio06())


// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23". Retorne apenas os dois últimos dígitos.
function extrairDigitosVerificadores(cpf) {
  const partesCpf = cpf.split('-')
  return partesCpf[1]
}

console.log(extrairDigitosVerificadores("056.985.990-23"))


// 8. Crie uma função que inverte uma string. Retorna ela invertida.
function inverterPalavra(palavra) {
  return palavra.split('').reverse().join('')
}

console.log(inverterPalavra('batata'))


// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.
function repetirPalavra(palavra, qt) {
  return palavra.repeat(qt)
}

console.log(repetirPalavra('batata', 3))


// 10. Escreva uma função que receba duas strings e retorne true se elas forem iguais ou false caso contrário.
function compararString(str1, str2) {
  return str1 === str2
}

console.log(compararString('batata', 'batata'))


// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador que também será definido via parâmetros da função (-, / ou .). Ex: formatarData(array, '.') -> '20.06.2000'
let dataArray = ['20', '06', '2000']

function formatarData(array, sep) {
  return array.join(sep)
}

console.log(formatarData(dataArray, '.'))


// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'
function busca(array, elemento, valorPadrao) {
  if(array.includes(elemento)) {
    return elemento
  } 
  
  return valorPadrao
}

let array = ['batata', 'abacaxi', 'laranja', 'uva']

console.log(busca(array, 'batata', 'não tem batata'))
