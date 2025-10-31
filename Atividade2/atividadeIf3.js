import readline from 'readline-sync';

let nome = readline.question("Digite o Nome do doador: ");
let idade = readline.questionInt("Digite a Idade do doador: ");
let primeiraDoacao = readline.question("Primeira doação de sangue? ");

if (idade >= 18 && idade <= 69) {
    if (idade >= 60 && primeiraDoacao === "true") {
        console.log(nome + " não está apto para doar sangue!");
    } else {
        console.log(nome + " está apto para doar sangue!");
    }
} else {
    console.log(nome + " não está apto para doar sangue!");
}