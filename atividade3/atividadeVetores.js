import readline from 'readline-sync'

let vetor = new Array(10);

for (let i = 0; i < 10; i++) {
  vetor[i] = parseFloat(readline.question(`Digite o número ${i+1}: `));
}

console.log("Elementos nos índices ímpares:");
for (let i = 1; i < 10; i += 2) {
  console.log(vetor[i]);
}

console.log("Elementos pares:");
for (let i = 0; i < 10; i++) {
  if (vetor[i] % 2 === 0) {
    console.log(vetor[i]);
  }
}

let soma = 0;
for (let i = 0; i < 10; i++) {
  soma += vetor[i];
}
console.log("Soma:", soma);

let media = soma / 10;
console.log("Média:", media.toFixed(2));