//Defined the two players and will be filled on when user clicks on the 

function findInArray(clickedPokemon){
  //grab the name of the selected card
  var pokemonName = $(clickedPokemon).children(":first").html()

  // look through the pokemonArray and pass that obj as a new player
  var pokemonObj;
  var element = 0;
  $.each(pokemonArray, function (index){
    if(pokemonArray[index].name.toUpperCase() === pokemonName){
      pokemonObj = pokemonArray[index]
      element = index;
    }
  })
  //console.log(pokemonObj)
  return [pokemonObj,element];
}

function displayPokemonCards (player) {
  for(var i = 0; i < pokemonArray.length; i++){
    var displayPokemon = generateCard(player ,pokemonArray[i], i+1);
    $(player).append(displayPokemon)
  }
}

$('.startBattle').hide();
var Player1 = new Player();
var Player2 = new Player();


//player one Cards
function playerOneSelectCard() {
  //determine who turn it is
  player1cards[0] = true;
  player2cards[0] = false;
  //show which player turn it is and hide the other 
  $(player2cards[1]).hide();
  $(player1cards[1]).show();

  //clear the cards and on click listeners on the board and reload the pokemon array
  $(player1cards[1] + ' .playerCards').html("")
  $(player1cards[1] + ' > .playerCards').unbind()
  displayPokemonCards(player1cards[1]);

  
  //Staring the shuffle
  $(player1cards[1] + ' .card1').addClass('current');

  //finds clicked card and pushes into player array outof pokemon array
  $(player1cards[1] + ' > .playerCards').on("click", '.card',function (){
    // debugger;
    var clickedPokemon = this;
    var foundObj = findInArray(clickedPokemon);

    //remove the pokemonObj from the pokemonArray
    Player1.pokemon.push(pokemonArray[foundObj[1]]);
    pokemonArray.splice(foundObj[1],1);

    console.log("1:", Player1);
    
    playerTwoSelectCard();
  })// card Click
}

function playerTwoSelectCard() {
  //determine who turn it is
  player1cards[0] = false;
  player2cards[0] = true;

  //show which player turn it is and hide the other 
  $('.playerOneOptions').hide();
  $('.playerTwoOptions').show();

  //clear the cards on the board and reload the pokemon array
  $('.playerTwoOptions .playerCards').html("")
  $('.playerTwoOptions .playerCards').unbind()
  displayPokemonCards(".playerTwoOptions")

  //Staring the shuffle
  $('.playerTwoOptions .card1').addClass('current');


  //finds clicked card and pushes into player array outof pokemon array
  $('.playerTwoOptions .playerCards').on("click", '.card',function (){
    // debugger;
    var clickedPokemon = this;
    var foundObj = findInArray(clickedPokemon);

    // //remove the pokemonObj from the pokemonArray
    Player2.pokemon.push(foundObj[0])
    pokemonArray.splice(foundObj[1],1)

    $('.playerTwoOptions').hide();
    
    //toggle back and forth between the two player until both of them have 5 pokemon
    if(Player1.pokemon.length < 5){
      console.log("2: ", Player2)
      playerOneSelectCard()
    } else {
      $('.startBattle').show();
    }

  })// card Click
}
