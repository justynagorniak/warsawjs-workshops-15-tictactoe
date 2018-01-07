
document.addEventListener('DOMContentLoaded', function(){      //funkcja anonimowa

 //wywolanie funkcji najpierw powinno byc! hoisting, jakby bylo na koncu tez by dzialalo 
initGame();
 
    //deklaracja funkcji 
    function initGame(){
        var fields = document.querySelectorAll('.board > div'); //pobiera i zwraca !tablice! divow

        fields.forEach(fields => fields.addEventListener('click',fieldClickHandler));
  }

  function fieldClickHandler() {
      console.log("Hello", this);
  }

});



