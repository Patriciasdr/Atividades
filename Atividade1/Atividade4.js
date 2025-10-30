import readline from 'readline-sync';


let n1;
let n2;
let n3;
let n4;
let diferenca;

n1 = readline.questionFloat("Digite o numero1: ");
n2 = readline.questionFloat("Digite o numero2: ");
n3 = readline.questionFloat("Digite o numero3: ");
n4 = readline.questionFloat("Digite o numero4: ");

diferenca = (n1 * n2) - (n3 * n4);

console.log(`\nDiferença: ${diferenca.toFixed(1)}`);
