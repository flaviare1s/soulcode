let pessoa = {
  nome: "José Almir",
  cpf: "543.813.910-23",
  dataNascimento: "01/01/2000",
  contato: { // objeto aninhado
    email: "jose.almir@soulcode.com",
    telefone: "(99) 9-9999-9999",
    fax: "+9 999 999 9999",
  },
  endereco: {
    cidade: "Fortaleza",
    estado: "CE",
    cep: "60000-000",
    numero: "271",
  },
  objetivosProfissionais: ['Home Office', 'Desenvolvedor Senior', 'Exterior'],
  formacao: [
    { nome: 'Ensino médio', periodo: '2000-2003'},
    { nome: 'Técnico em Informática', periodo: '2003-2005'},
    { nome: 'Bacharelado em Computação', periodo: '2005-2010'}
  ]
}

// console.log(pessoa.contato)
// console.log(pessoa.contato.email)
// console.log(pessoa.endereco.estado)
// console.log(pessoa.objetivosProfissionais)

// pessoa.objetivosProfissionais.push('Inglês fluente')
// console.log(pessoa.objetivosProfissionais)

// pessoa.objetivosProfissionais.forEach(objetivo => console.log(objetivo))

pessoa.formacao.push({ nome: 'Mestrado em IA', periodo: '2010-2012'})
console.log(pessoa.formacao[3].nome)

for(let f of pessoa.formacao) {
  console.log('Formação: ', f.nome)
  console.log('Perído: ', f.periodo)
}

// Exemplo: Crie um objeto para representar um aluno: 
  // nome
  // série
  // matérias (nome da máteria, nome do professor)
  // notas

  let aluno = {
    nome: 'Maria Aparecida',
    serie: '1º ano',
    materias: [
      { nome: 'Português', professor: 'Serjão' },
      { nome: 'Matemática', professor: 'Rita' },
      { nome: 'História', professor: 'Madalena' },
    ],
    notas: {
      portugues: [8.5, 9.0, 7.2],
      matematica: [10.0, 10.0, 9.8],
      historia: [7.0, 8.5, 9.0],
    }
  }

  console.log(aluno.notas.portugues)
