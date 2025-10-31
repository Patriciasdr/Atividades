import readline from "readline-sync";

let numero1 = readline.questionFloat("Digite o 1º número: ");
let numero2 = readline.questionFloat("Digite o 2º número: ");
let operacao = readline.questionInt("Digite a operação (1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão): ");

switch (operacao) {
    case 1:
        console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${(numero1 + numero2).toFixed(1)}`);
        break;
    case 2:
        console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${(numero1 - numero2).toFixed(1)}`);
        break;
    case 3:
        console.log(`${numero1.toFixed(1)} * ${numero2.toFixed(1)} = ${(numero1 * numero2).toFixed(1)}`);
        break;
    case 4:
        console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${(numero1 / numero2).toFixed(1)}`);
        break;
    default:
        console.log("Operação Inválida!");
}