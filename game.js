document.addEventListener('DOMContentLoaded', function(){      //funkcja anonimowa
      
    //step3 : declare 2 players as a object : 0 - red, 1 -blue;
var playerClasses = {   //to obiekt, tworzony jako zmienna
    'playerA' : 'red', 
    'playerB' : 'blue'
};

var scores = {
    'playerA' : '0',
    'playerB' : '0'
}

var currentPlayer;  // pusta zmienna 
 
//step5 emptyFields var
var emptyFields;
var resetButton = document.getElementById('reset-score');   


 //wywolanie funkcji najpierw powinno byc! hoisting sprawdzic, jakby bylo na koncu tez by dzialalo 
initGame();

resetButton.addEventListener('click', function() {
    scores['playerA'] = 0;
    scores['playerB'] = 0;

    displayPlayerScore('playerA');
    displayPlayerScore('playerB');
});

function displayPlayerScore(player) {
    var score = document.getElementById(`${player}-score`);

    score.innerHTML = `${player} score: ${scores[player]}`;
}

function updatePlayerScore(player) {
    scores[player]++;
}

function roundInfo() {
    var whosRound = document.getElementById("roundInfo");

    whosRound.className = playerClasses[currentPlayer];
    whosRound.innerHTML = `Round for ${currentPlayer}`;  //co to ${} za skladnia ? 

}


    //deklaracja funkcji 
    function initGame(){
        var fields = document.querySelectorAll('.board > div'); //pobiera i zwraca !tablice! divow 
        currentPlayer = 'playerA';
        emptyFields = 9; // deklaracja liczby pól
        fields.forEach(field => field.addEventListener('click',fieldClickHandler));
        fields.forEach(field => field.removeAttribute('class')); // arrow pozwala na definiowanie var field :) 
        roundInfo();
        displayPlayerScore('playerA');
		displayPlayerScore('playerB');
 
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

     roundInfo();
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

 //funkcja 'includes' wbudowana do tablicy, nowa w es6; sprawdza czy tablica zawiera dany element;
 
 //step 6a
 var boardCheck = [
    row1,
    row2,
    row3,
    column1,
    column2,
    column3,
    diagonal1,
    diagonal2
 ];

// Check if any of win configuration is redredred (red wins) 
if (boardCheck.includes('redredred')) {
    setTimeout(() => {    //cherome fix - whay chrome does it ?
     alert("Red wins, wohoo");
     updatePlayerScore('playerA');
     initGame();   
    } ,100) 
    return; // nie sprawdza dalej funkcji
}

// Check if any of win configuration is blublueblue (red wins) 
if (boardCheck.includes('blueblueblue')) {
    setTimeout (() => {       
    alert("Blue wins, wohoo");
    updatePlayerScore('playerB');
    initGame();
    }, 100);
    return; // nie sprawdza dalej funkcji
}

    if (!emptyFields ) {   // czyli if emptyFields === 0 

        setTimeout(() => {
            alert("TIE!yeah"); //blad !
            initGame();
        }, 100);
      
        
      }
  }

});



