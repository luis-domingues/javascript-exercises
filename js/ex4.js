/*  Um simples script que desenvolvi para verificar e imprimir decrescentemente a ordem dos elementos de uma lista.  */

const listNumbers = [16, 2, 8, 128, 32, 4]; //array contendo elementos do tipo number, aleatoriamente

const descendingOrder = (...numbers) => { //função criada, utilizando o operador spread, para ordernar os números de forma decrescente
  return numbers.sort((x, y) => y - x); // o método sort foi utilizado para ordenar os números na ordem solicitada
}

console.log(descendingOrder(...listNumbers)); //registro do resultado no output