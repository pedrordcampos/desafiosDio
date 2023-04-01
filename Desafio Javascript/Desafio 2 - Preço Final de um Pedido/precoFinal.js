/* Desafio
 * Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário.
 * O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.
 */
  
const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

//TODO: Calcular o preço final do pedido (total dos hambúrgueres + total das bebidas).
//TODO: Calcular o troco do pedido, considerando o preço final e o valor pago pelo usuário.
//TODO: Imprimir a saída no formato especificado neste desafio.

let pedidoTotal = (valorHamburguer * quantidadeHamburguer) + (valorBebida * quantidadeBebida);
let troco = valorPago - pedidoTotal;

print(`O preço final do pedido é R$ ${pedidoTotal.toFixed(2)}. Seu troco é R$ ${troco.toFixed(2)}.`)