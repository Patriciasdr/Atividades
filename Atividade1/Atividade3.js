import readline from 'readline-sync';

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = readline.questionFloat("Digite o Salário Bruto: ");
adicionalNoturno = readline.questionFloat("Digite o Adicional Noturno: ");
horasExtras = readline.questionFloat("Digite as Horas Extras: ");
descontos = readline.questionFloat("Digite os Descontos: ");

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log(`\nSalário Líquido: ${salarioLiquido.toFixed(2)}`);