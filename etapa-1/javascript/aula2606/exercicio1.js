// 1. Escreva um programa que inverte uma string
let palavra = 'palavra'
let invertida = ''

for(let i = palavra.length - 1; i >= 0; i--) {
  invertida += palavra[i]
}
console.log(invertida)


// 2. Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
let frase = 'Vou trocar uma palavra dessa frase'
console.log(frase.replace('palavra', '###'))


// 3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
let email = 'aluno@soulcode.com'

if(email.endsWith('soulcode.com')) {
  console.log('Esse email pertence ao domínio da SoulCode!')
} else {
  console.log('O e-mail não pertence ao domínio da SoulCode!')
}
