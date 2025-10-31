import readline from 'readline-sync'

let A = readline.questionInt("Digite o número A: ");
let B = readline.questionInt("Digite o número B: ");
let C = readline.questionInt("Digite o número C: ");

if(A + B > C){
    console.log("A soma de A + B é maior do que C.")
}else if (A + B < C){
console.log("A soma de A + B é menor do que C.")
}else{console.log("A soma de A + B é igual a C.")}