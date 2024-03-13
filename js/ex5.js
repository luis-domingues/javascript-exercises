/*  Exercício proposto pela Codeacademy, no qual o objetivo é desenvolver um script de cadastro seprando 3 tipos de corredores:
    1 - Corredores adultos e jovens, poderão se registar a qualquer momento.
    2 - Corredores devem receber um número de registro e o horário da corrida, com base em sua idade e inscrição.
    3 - Adultos registrados antecipadamente, recebem um número de corrida igual ou superior a 1000. Todos os outros recebem um número abaixo de 1000.
    4 - Inscritos adultos registrados correm às 9h30. Adultos atrasados ​​correm às 11h. Inscritos jovens correm às 12h30 (independente da inscrição).
*/

let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge = 21;
let register = false; //indica se o corredor, maior de idade, se inscreveu antecipadamente

if (runnerAge >= 18 && register) {
  raceNumber += 1000;
  console.log(`Seu número de corrida é: ${raceNumber}`);
  console.log(`Corredor ${raceNumber}, sua corrida irá acontecer às 9h30`);
} else if (runnerAge >= 18 && !register) {
  console.log(`Os inscritos maiores de idade que não se inscreveram antecipadamente, correrão às 11h, Seu número é ${raceNumber}.`);
} else {
  console.log(`Seu número de corrida é: ${raceNumber}`);
  console.log(`Os inscritos menores de idade correrão às 12h30. Número de inscrição é: ${raceNumber}`);
}