//Questão 1
function valores(){
    let x = 5
    let y = 7
    
    if(x < y){
      console.log("Olá mundo!")
    }else if(x > y){
      console.log("Mundo, olá!")
    }else if(x == y){
      console.log("Adeus!")
    }
   }

   //Questão 2
   function filmes(){
    let fruta = prompt("Digite uma fruta")
    switch(fruta){
      case 'banana':
        console.log("O filme é Os minions.");
        break;
  
      case 'laranja':
        console.log("O filme é Laranja Mecânica.");
        break;
  
      case 'maça':
        console.log("O filme é Branca de neve.");
        break;
  
      default:
        console.log("O cinema tá fechado.");
    }
  }