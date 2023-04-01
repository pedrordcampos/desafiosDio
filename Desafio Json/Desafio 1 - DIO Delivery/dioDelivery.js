/* Desafio
* A empresa DIO Delivery precisa calcular o valor total de um pedido e imprimir na tela as seguintes
* informações: o nome do cliente, o endereço de entrega e o total do pedido, incluindo a taxa de 
* entrega, fixa de R$ 5.00.
*/

let valorTotal = 0;
for (let i = 0; i < pedido.itens.length; i++) {
valorTotal += pedido.itens[i].preco;
}

// O valor total do pedido deve ser somado à taxa de entrega:
valorTotal += pedido.taxaEntrega;

// Para imprimir a saída no padrão descrito, podemos utilizar o método print:
print(`Cliente: ${pedido.cliente}`);
print(`Endereço: ${pedido.endereco}`);
print(`Itens:`);
for (let i = 0; i < pedido.itens.length; i++) {
print(`${pedido.itens[i].nome} - R$ ${pedido.itens[i].preco.toFixed(2)}`);
}
print(`Taxa de entrega: R$ ${pedido.taxaEntrega.toFixed(2)}`);
print(`Valor total: R$ ${valorTotal.toFixed(2)}`);





