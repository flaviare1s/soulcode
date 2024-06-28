// Objetos => servem para estruturar dados

/*
  let variavael = {
    propriedade1: 'valor1'
    propriedade2: 'valor2'
    propriedade3: 'valor3'
  }
*/

let pessoa1 = {
  nome: 'José',
  sobrenome: 'Silva',
  idade: 25,
  peso: 70.5,
  altura: 1.75
}

let pessoa2 = {
  nome: 'Joaquim',
  sobrenome: 'Ferreira',
  idade: 30,
  peso: 80.5,
  altura: 1.85
}

// Acesso a propriedade de um objeto:

console.log(pessoa1.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa1['idade'])
console.log(pessoa2['peso'])
console.log(pessoa1.email) // undefined


// Adicionando propriedades ao objeto:
pessoa1.email = 'jose@jose'
pessoa2['email'] = 'joaquim@joaquim'
console.log(pessoa1.email)
console.log(pessoa2.email)

// Alterando propriedades de um objeto:
pessoa1.idade = 26 // acrescentou +1 à idade de pessoa1
pessoa2['idade'] = 31
console.log(pessoa1.idade)
console.log(pessoa2.idade)

// Removendo propriedades de um objeto:
delete pessoa1.email
console.log(pessoa1)


// JSON => JavaScript Object Notation
// Transformar um objeto em um JSON
let dadodPessoa1 = JSON.stringify(pessoa1)
console.log(dadodPessoa1)

// Transformar um JSON em um objeto
let pessoa3 = JSON.parse(dadodPessoa1)
console.log(pessoa3)

