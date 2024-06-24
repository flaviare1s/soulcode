// Estruturas condicionais (if, else, else if)

let idade = 18; 

if(idade >= 18) { // bloco se for verdadeiro
  console.log('Maior de idade');
} else { // bloco se for falso
  console.log('Menor de idade');
}

console.log('Fim do programa');

let media = 7;
let sabeIngles = true;
let aprovado = media >= 7;
let contratado = aprovado && !sabeIngles;

if(aprovado) {
  console.log('Parabéns, voce foi aprovado!');
} else {
  console.log('Que pena! Continue tentando!');
}

console.log('Fim do programa');

// Positivo, negativo ou zero:
let numero = 50;

if(numero > 0) {
  console.log('Positivo');
} else if(numero < 0) {
  console.log('Negativo');
} else {
  console.log('Zero');
};
