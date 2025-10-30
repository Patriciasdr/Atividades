import readline from 'readline-sync';

let salario;
let abono;
let novoSalario;

salario = readline.questionFloat("Digite o salário: ");
console.log(`\nSalário: ${salario}`);

abono = readline.questionFloat("Digite o abono: ");
console.log(`\nAbono: ${abono}`);

novoSalario = salario + abono;

console.log(`\nO novo salário é: ${novoSalario.toFixed(2)}`);
