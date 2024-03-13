/*  Neste exercício, criei um script que ler três números reais, e em seguida mostrasse o maior e o menor deles.  */

//varáveis globais que irão servir de parâmentros na função seguinte
let x = 0
let y = 3.14
let z = 2.71828

const greaterOrLessNumber = (x, y, z) => { //função criada para achar o maior e menor valor dentre 3 parâmentros
   const max = Math.max(x, y, z);
  const min = Math.min(x, y, z);
  return { 
    max, min
  }
}

const { 
  max: greaterNumber, 
  min: lessNumber
 } = greaterOrLessNumber(x, y, z); //constante criada que chamará greaterOrLessNumber() que atribuirá o resultado solicitado
 
console.log(`O maior número é ${greaterNumber} e o menor é: ${lessNumber}`); //registro do resultado no output