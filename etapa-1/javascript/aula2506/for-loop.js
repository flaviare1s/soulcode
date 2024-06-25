/*
  for (inicialização; condição; atualização) {
    bloco de comandos
  }
*/

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

for (let i = 10; i >= 0; i--) {
  console.log(i)
}

for (let i = 0; i <= 1000; i += 5) {
  console.log(i)    
}

for (let i = 1; i <= 10; i++) {
  let n = 7
  console.log(`${n} x ${i} = ${n * i}`)
}

let soma = 0

for (let i = 1; i <= 999; i++) {
  if(i % 2 !== 0) {
    soma = soma + i
  }
}

console.log(soma)


let qt = 0

for (let i = 1; i <= 1000; i++) {
  if(i % 9 === 0) {
    console.log(`O número ${i} é divisível por 9.`)  
    qt++
  }
}

console.log('Total de números divisíveis por 9:', qt)
