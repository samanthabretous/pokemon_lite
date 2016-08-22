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

//player one Cards
$('.playerOneOptions > .playerCards > .card').on("click", function (){
  var clickedPokemon = this;
  var foundObj = findInArray(clickedPokemon);

  Player1 = new Player(foundObj[0]);
  $(".playerOneImg > img").attr("src", Player1.pokemon.image);

  //remove the pokemonObj from the pokemonArray
  pokemonArray.splice(foundObj[1],1);

  //remove player1 card selection
  $('.playerTwoOptions > .playerCards').html("")
  $('.playerOneOptions').hide();
  $('.playerTwoOptions').show();

  //show the pokemonArray for player2

  for(var i = 0; i < pokemonArray.length; i++){
    var displayPokemon = generateCard(".playerTwoOptions",pokemonArray[i], i+1);
    $('.playerTwoOptions').append(displayPokemon)
  }

})// card Click


$('.playerTwoOptions .playerCards').on("click", '.card',function (){

  var clickedPokemon = this;
  var foundObj = findInArray(clickedPokemon);

  Player2 = new Player(foundObj[0])
  $(".playerTwoImg > img").attr("src", Player2.pokemon.image);

  // //remove the pokemonObj from the pokemonArray
  pokemonArray.splice(foundObj[1],1)


  //remove player2 card selection
  $('.playerTwoOptions').remove();
   $('.startBattle').show();

})// card Click



//switch the screen from card selection to battle screen
$('.startBattle').click(function (){
  $('.characterSelection').addClass("hide");
  $('.battleScreen').removeClass("hide");
  displayPlayers(Player1, true);
  displayPlayers(Player2);
  $('.playerOne').animate("")
})


// display on battle screen the infomation about player 1 and tow
function displayPlayers(player){
  var num;
  player == Player1 ? num = "One" : num = "Two"
  
  $('.player' + num + 'Name').text(player.pokemon.name);
  $('.status' + num + ' p span').text(player.pokemon.magic.maxMagic);

}
