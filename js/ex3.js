/*  Neste exercício, desenvolvi um script que fosse capaz de gerar até o n-ésimo termo da sequência de Fibonacci.  */

const nThTerm = (n) => { //a função nThTerm (n-ésimo termo) criada com "n" como argumento
  let series = [1, 1];  //array criado para iniciar os dois primeiros termos da sequência
  for (let i = 2; i < n; i++) { //o loop, neste caso, tem como objetivo calcular os próximos termos e adicioná-los no array
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
};
const n = 12; //variável criada para colocar o termo desejado
const fibonacciSeries = nThTerm(n);
console.log(`O ${n} termo é ${fibonacciSeries}`);