/* Desafio
 * Imagine que você é um desenvolvedor de uma plataforma de entregas de comida que está trabalhando em 
 * um novo recurso que permitirá que os entregadores vejam informações sobre os clientes dos pedidos que
 * devem entregar, incluindo o nome, endereço, ID e número de telefone da pessoa.
 *
 * Sua tarefa é criar um programa em JavaScript que leia os dados de um pedido, que incluem 
 * (principalmente) as informações do Cliente. Com os dados de entrada em mãos, seu programa deve 
 * apresentá-los em uma tela (Saída) para os entregadores orquestrarem as entregas dos pedidos.
 */

// Criando um objeto chamado "pedido" as seguintes propriedades:
const pedido = {
    cliente: {
      nome: gets(),       // Lê a primeira linha da "Entrada": Nome do Cliente.
      endereco: gets(),   // Lê a segunda linha da "Entrada": Endereço do Cliente.
    },
    id: parseInt(gets()), // Lê a terceira linha da "Entrada": ID do Pedido.
    telefone: gets(), // Lê a quarta linha da "Entrada": Telefone.
  };
  
  //TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.
  //TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".  
  //TODO: Imprima a saída formatada de acordo com este desafio.
  
  print(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}`); 
  print(`ID: ${pedido.id}`);
  print(`Tel: ${pedido.telefone}`);