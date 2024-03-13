/* 
  Exercício de extruturas de loop, do site Stackoverflow, no qual um usuário desejava executar uma função que
  imprimisse no console "aqui e tenho o valor de X", onde X será o valor de i em cada iteração, a cada valor
  de 0 até 3.

  VERSÃO DO USUÁRIO:
    function passandoPor () {
      for (var i=0; i <2; i++) {
        console.log ("aqui eu tenho o valor de", i)
      }
    }
*/

//minha versão, consertando o código acima 
const passBy = () => {
  for (let i = 0; i <= 3; i++) {
    console.log(`Aqui eu tenho o valor de ${x}`);
  }
}
passBy()