var player1cards = [true, '.playerOneOptions'];
var player2cards = [false, '.playerTwoOptions'];

// generate card info based on each pokemon object
function generateCard (player, pokemon, cardNumber){

  $(player + ' .playerCards').append('<div class="card card' + cardNumber + '"></div>');

  var card = player + " .playerCards .card" + cardNumber;
  
  //add pokemon name
  $(card).append('<h4>'+ pokemon.name.toUpperCase() +'</h4>');

  // //add health
  $(card).append('<p class="playerHealth">'+pokemon.health.maxHealth +' HP</p>');

  //add magic
  $(card).append('<p class="playerMagic">'+ pokemon.magic.maxMagic+' MAGIC</p>');

  // //add image
  $(card).append('<div class="char char' + cardNumber +  '"></div>')

  $(player + " .playerCards .card .char" + cardNumber).append('<img src ="' + pokemon.image + '">');

  // add attack skills
  $(card).append('<ul class="attack'+cardNumber+'"><span>ATTACKS</span></ul>');
  $.each(pokemon.skills, function (key, value){
    $(player + ' .playerCards .card ul .attack'+cardNumber).append('<li>'+key+'</li>')
  });
  
}

//rotate cards
//allow user to scroll through all the cards
var nextEl = $(".nextCard");
var prevEl = $(".prevCard");    

var showNextSlide = function(playersTurn){
  var currentElement = $(playersTurn + " .current");

  //add the class current to the next element then remove and append card to the end of the div
  currentElement.removeClass("current");
  currentElement.next().addClass("current");  
  currentElement.appendTo($(playersTurn + ' .playerCards'))
  //currentElement.remove()
};
  

var showPreviousSlide = function(playersTurn){
  var currentElement = $(playersTurn + " .current");
  
  //move the last element to the front of the div
  var lastElement = currentElement.parent().children().last().addClass('current');
  lastElement.prependTo($(playersTurn + ' .playerCards')) 
  currentElement.removeClass("current");
  currentElement.prev().addClass("current");
};  

//check to see who turn it is
function whosTurn(){
  return player1cards[0] ? ".playerOneOptions" : ".playerTwoOptions"
}

nextEl.on("click", function (){
  var playersTurn = whosTurn()
  showNextSlide(playersTurn);
})
prevEl.on("click", function (){
  var playersTurn = whosTurn();
  showPreviousSlide(playersTurn);
})




