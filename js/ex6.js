/* Neste script que desenvolvi, o objetivo era fazer um programa que calculasse o fatorial de um número inteiro fornecido pelo usuário. */

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) { //neste loop, o for itera o valor "1" até o número fornecido (num)
    result *= i
  }
  return result //result está retornando o resultado do fatorial fornecido
}
console.log(factorial(7)); //função chamada com o argumento 7 e registando o resultado no output