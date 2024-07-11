// Spread: permite espalhar as propriedades de um objeto em outro:

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2020
}

const copiaCarro = {...carro}

const outroCarro = {...carro, ano: 2023, dono: 'Maria'}

console.log(copiaCarro)
console.log(outroCarro)

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

const enderecoPessoa = {...pessoa.endereco}

console.log(enderecoPessoa)
