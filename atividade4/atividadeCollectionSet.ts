import readline from 'readline-sync';

// Cria o Set do tipo number
const numeros: Set<number> = new Set<number>();

// Entrada de dados
for (let i = 1; i <= 10; i++) {
    let numero = readline.questionInt(`Digite o ${i}º número: `);
    numeros.add(numero); // Adiciona o número no Set (sem repetir)
}

// Converte o Set para Array e ordena em ordem crescente
const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

// Saída de dados
console.log("\nListar dados do Set:");
for (let numero of numerosOrdenados) {
    console.log(numero);
}
