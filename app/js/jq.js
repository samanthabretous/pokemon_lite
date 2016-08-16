// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.

// keeps track of current player
var currentPlayer = "player1";
var Player1;
var Player2;
$(".mainOptions > h4").html(currentPlayer);
// temp creation of players 1 and 2
// var Player1 = new Player(Pikachu);
// Player1.skillsToArray();
// var Player2 = new Player(Bulbasaur);
// Player2.skillsToArray();
// ////////
// var something = Player2
// keeps track of what is being displayed
var displaying = "mainMenu";

// ability to switch between players
function switchPlayers(){
	if (currentPlayer === "player1"){
		currentPlayer = "player2";
	}else {
		currentPlayer = "player1";
	}
	$(".mainOptions h4").html(currentPlayer);
};

// what to display during the attack click
function attackDisplay(player) {
	displaying = "attack"
	$("#top-left").html(player.pokemonSkills[0]);
	$("#top-right").html(player.pokemonSkills[1]);
	$("#bottom-left").html(player.pokemonSkills[2]);
	$("#bottom-right").html(player.pokemonSkills[3]);
};

function mainDisplay(player, otherPlayer , $clicker) {
	if (displaying == "attack"){
		if (currentPlayer == "player1"){
			player.pokemon.attack($clicker.html(), otherPlayer.pokemon);
		}else {
			player.pokemon.attack($clicker.html(), Player1.pokemon);
		}
	}else if(displaying == "pack"){
		player.pokemon.getMagic();
	}
	displaying = "mainMenu";
	switchPlayers();
	$("#top-left").html("FIGHT");
	$("#top-right").html("PACK");
	$("#bottom-left").html("RUN");
	$("#bottom-right").html("COOL");
};

function packDisplay (player){
	displaying = "pack";
	$("#top-left").html("Raspberries");
	$("#top-right").html("");
	$("#bottom-left").html("");
	$("#bottom-right").html("");
};


// switch cases for buttons
$("#top-left").on('click', function(){
	if(currentPlayer == "player1"){
		var player = Player1;
		var otherPlayer = Player2;
	}else {
		var player = Player2;
		var otherPlayer = Player1;
	}
	switch (displaying){
		case "mainMenu" :
			attackDisplay(player);
			break;
		default:
			mainDisplay(player, otherPlayer ,$("#top-left"));
	};
});


$("#top-right").on('click', function(){
	if(currentPlayer == "player1"){
		var player = Player1;
		var otherPlayer = Player2;
	}else {
		var player = Player2;
		var otherPlayer = Player1;
	}
	switch (displaying){
		case "mainMenu" :
			packDisplay(player);
			break;
		default:
			mainDisplay(player, otherPlayer, $("#top-right"));
	};
});

$("#bottom-left").on('click', function(){
	if(currentPlayer == "player1"){
		var player = Player1;
		var otherPlayer = Player2;
	}else {
		var player = Player2;
		var otherPlayer = Player1;
	}
	switch (displaying){
		case "mainMenu" :
			mainDisplay(player, otherPlayer, $("#bottom-left"));
			break;
		default:
			mainDisplay(player, otherPlayer, $("#bottom-left"));
	};
});

$("#bottom-right").on('click', function(){
	if(currentPlayer == "player1"){
		var player = Player1;
		var otherPlayer = Player2;
	}else {
		var player = Player2;
		var otherPlayer = Player1;
	}
	switch (displaying){
		case "mainMenu" :
			mainDisplay(player, otherPlayer, $("#bottom-left"));
			break;
		default:
			mainDisplay(player, otherPlayer, $("#bottom-right"));
	};
});

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
  Player1.skillsToArray();

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
  console.log("hello")
  var clickedPokemon = this;
  var foundObj = findInArray(clickedPokemon);

  Player2 = new Player(foundObj[0])
  Player2.skillsToArray();

  // //remove the pokemonObj from the pokemonArray
  pokemonArray.splice(foundObj[1],1)
  console.log(pokemonArray)

  //remove player2 card selection
  $('.playerTwoOptions').remove();
   $('.startBattle').show();

})// card Click



//switch the screen from card selection to battle screen
$('.startBattle').click(function (){
  $('.characterSelection').addClass("hide");
  $('.battleScreen').removeClass("hide");
})









