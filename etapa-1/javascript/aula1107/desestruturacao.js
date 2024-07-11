// Desestruturação de Objetos:
// Permite extrair valores de um objeto e atribuir esses valores em variáveis.

const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 30,
  profissao: 'Desenvolvedor',
  endereco: {
    rua: 'Av. Principal',
    numero: 123,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP'
  }
}

// Dentro das chaves coloca-se as propriedade que queremos extrair
const {nome, idade, profissao} = pessoa

console.log(nome)
console.log(idade)

// Podemos extrair propriedades de objetos aninhados:
const {endereco: {estado, cidade}} = pessoa

console.log(estado)
