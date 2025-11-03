import readline from 'readline-sync';

let numero;
let somaPositivos = 0;

do {
    numero = readline.questionInt("Digite um número: ");

    if (numero > 0) {
        somaPositivos += numero;
    }

} while (numero !== 0);

console.log(`A soma dos números positivos é: ${somaPositivos}`);
