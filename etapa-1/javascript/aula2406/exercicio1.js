// EXERCÍCIOS:

// 1. Crie uma variável que armazene uma temperatura em Fahrenheit, e realize a conversão para Celsius. A equação para realizar a conversão é: C = (F - 32) / 1.8

const fahrenheit = 100;
const celsius = (fahrenheit - 32) / 1.8;
console.log(celsius);

// 2. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectivamente: 3, 2, 1, 4 e 5

const nota1 = 9;
const nota2 = 7.2;
const nota3 = 8;
const nota4 = 6.5;
const nota5 = 10;

const mediaPonderada = (nota1 * 3 + nota2 * 2 + nota3 * 1 + nota4 * 4 + nota5 * 5) / (3 + 2 + 1 + 4 + 5);
console.log(mediaPonderada);
