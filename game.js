document.addEventListener('DOMContentLoaded', function(){      //funkcja anonimowa
    //step5 emptyFields var
 var emptyFields   

     
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
        emptyFields = 9; // deklaracja liczby pól
        fields.forEach(fields => fields.addEventListener('click',fieldClickHandler));
  }

  // nastepna deklaracja funkcji 
  function fieldClickHandler() {
    var playerClass = playerClasses[currentPlayer];
    this.classList.add(playerClass);
    emptyFields --; // to emptyfields = emptyfields -1 ;

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
  checkWinner();

  }

  function checkWinner() {
    var fields = document.querySelectorAll('.board > div'); //pobiera i zwraca !tablice! divow

     /*
        
            +---+---+---+
            | 0 | 1 | 2 |
            +---+---+---+
            | 3 | 4 | 5 |
            +---+---+---+
            | 6 | 7 | 8 |
            +---+---+---+
            
        */
 // Horizontal win configurations 012, 345, 678
 var row1 = fields[0].className + fields[1].className + fields[2].className;
 var row2 = fields[3].className + fields[4].className + fields[5].className;
 var row3 = fields[6].className + fields[7].className + fields[8].className;

 // Vertical win configurations 036, 147, 258
 var column1 = fields[0].className + fields[3].className + fields[6].className;
 var column2 = fields[1].className + fields[4].className + fields[7].className;
 var column3 = fields[2].className + fields[5].className + fields[8].className;

 // Diagonal win configurations 048, 246
 var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
 var diagonal2 = fields[6].className + fields[4].className + fields[2].className;

// Check if any of win configuration is redredred (red wins) 
if ( row1 === 'redredred' ||
    row2 === 'redredred' ||
    row3 === 'redredred' || 
    column1 === 'redredred' ||   
    column2 === 'redredred' ||   
    column3 === 'redredred' ||
    diagonal1 === 'redredred' ||
    diagonal2 === 'redredred' ) {
    alert("Red wins");
    return;
}

// Check if any of win configuration is blublueblue (red wins) 
if ( row1 === 'blublueblue' ||
    row2 === 'blublueblue' ||
    row3 === 'blublueblue' || 
    column1 === 'blublueblue' ||   
    column2 === 'blublueblue' ||   
    column3 === 'blublueblue' ||
    diagonal1 === 'blublueblue' ||
    diagonal2 === 'blublueblue' ) {
    alert("Blue wins");
    return;
}


    if (!emptyFields ) {   // czyli if emptyFields === 0 
        alert("TIE!");
        return;
      }
  }

});



