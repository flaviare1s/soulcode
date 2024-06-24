/*
    Operadores lógicos -> boolean
    && -> E (AND)
    || -> OU (OR)
    ! ->  NÃO (NOT)
*/

// AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true && true && true && false); // false

// OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// NOT (!)
console.log(!true); // false
console.log(!false); // true

// Ordem de prioridade: NOT > OR > AND
console.log(!true || false); // false
console.log(!true && false); // false

let idade = 80;
// Idade entre 18 e 59 anos
console.log(idade >= 18 && idade <= 59);

let media = 10.0;
let sabeIngles = false;
let aprovado = media >= 7.0;
console.log("Aprovado? " + aprovado);

let contratado = aprovado && sabeIngles;
console.log("Contratado? " + contratado);

let reprovado = !aprovado; // Inverte o valor lógico dentro de aprovado
