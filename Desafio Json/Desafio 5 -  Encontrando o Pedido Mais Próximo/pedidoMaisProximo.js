/* Desafio
 * Um restaurante está buscando otimizar a entrega dos pedidos, e para isso precisa de um programa que
 * encontre o pedido mais próximo a partir de uma lista de pedidos. O programa deve exibir o nome e o 
 * tipo de comida do pedido mais próximo.
 * Seu desafio é criar um código em JavaScript que manipule um array com três objetos JSON, contendo 
 * as informações de cada pedido (nome, tipo e distância).
 */

const pedidos = [
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    },
    { 
      nome: gets(), 
      tipo: gets(), 
      distancia: parseFloat(gets())
    }
  ];
  
  //TODO: Usando o array acima identifique o pedio mais próximo (menor distância).
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  
  
  const proximo = pedidos.reduce((acumulador, pedido) => {
    return pedido.distancia < acumulador.distancia ? pedido : acumulador;
  });
  
  //TODO: Imprima a saída de acordo com o enunciado deste desafio.
  print(`O pedido mais próximo é o de ${proximo.nome}, do tipo ${proximo.tipo}`);