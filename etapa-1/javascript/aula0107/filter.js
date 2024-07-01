// Filter => cria um novo array com todos os elementos que passaram no teste da função

const notas = [7.0, 4.0, 5.5, 9.0, 8.4]

const notasAcimade7 = notas.filter((nota) => nota > 7)

console.log(notasAcimade7)


let arquivosPasta = ["codigo.js", "estilos.css", "index.html", "sobre.html"]
let extensao = ".html"

let arquivosFiltrados = arquivosPasta.filter((arquivo) => arquivo.endsWith(extensao))

console.log(arquivosFiltrados)

let turma = ['José Almir', 'Andreson Lima', 'Joaquim Ferreira', 'Flavio Almeida', 'Maria Sousa', 'Joaquim Almeida']
let presenca = ['José Almir', 'Joaquim Ferreira', 'Flavio Almeida', 'Maria Sousa', 'Joaquim Almeida']

let faltantes = turma.filter((aluno) => !presenca.includes(aluno))

console.log(faltantes)

// Exemplo: filtrar palavras acima de 5 caracteres:
let palavras = ['batata', 'abacaxi', 'laranja', 'morango', 'abacate', 'mamão', 'uva']

let palavrasAcimaDe5 = palavras.filter((palavra) => palavra.length > 5)

console.log(palavrasAcimaDe5)
