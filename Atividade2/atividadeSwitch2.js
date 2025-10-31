import readline from "readline-sync";

let codigo = readline.questionInt("Código do Produto: ");
let quantidade = readline.questionInt("Quantidade: ");

let produto, preco;

switch (codigo) {
case 1: produto = "Cachorro-quente";
        preco = 10.00;
        break
case 2: produto = "X-Salada";
        preco = 15.00;
        break   
case 3: produto = "X-Bacon";
        preco = 18.00;
        break
case 4: produto = "Bauru";
        preco = 12.00;
        break
case 5: produto = "Refrigerante";
        preco = 8.00;
        break
case 6: produto = "Suco de laranja";
        preco = 13.00;
        break         
}


console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${(quantidade * preco).toFixed(2)}`);