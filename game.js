document.addEventListener('DOMContentLoaded', function(){      //funkcja anonimowa

    //step3 : declare 2 players as a object : 0 - red, 1 -blue;
var playerClasses = {   //to obiekt, tworzony jako zmienna
    'playerA' : 'red', 
    'playerB' : 'blue'
};
var currentPlayer;  // pusta zmienna 

 //wywolanie funkcji najpierw powinno byc! hoisting sprawdzic, jakby bylo na koncu tez by dzialalo 
initGame();


    //deklaracja funkcji 
    function initGame(){
        var fields = document.querySelectorAll('.board > div'); //pobiera i zwraca !tablice! divow 

        currentPlayer = 'playerA';

        fields.forEach(fields => fields.addEventListener('click',fieldClickHandler));
  }

  // nastepna deklaracja funkcji 
  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);

   // to konstrukcja jak "if", jak ponizej: currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA'; 

    if (currentPlayer==='playerA') {
        currentPlayer = 'playerB'
    } else {
        currentPlayer = 'playerA';
    }

      console.log("Hello", this); // tutaj this to referencja, odnosi sie do klieknietego diva
     // this.classList.add("red");  

  // remove click handler from clicked element
  this.removeEventListener('click', fieldClickHandler);   //removeEventListener spr
  }

});



