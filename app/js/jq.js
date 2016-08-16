// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.

// keeps track of current player
var currentPlayer = "player1";
$(".mainOptions > h4").html(currentPlayer);
// temp creation of players 1 and 2
var Player1 = new Player(Pikachu);
Player1.skillsToArray();
var Player2 = new Player(Bulbasaur);
Player2.skillsToArray();
////////
var something = Player2
// keeps track of what is being displayed
var displaying = "mainMenu";

// ability to switch between players
function switchPlayers(){
	if (currentPlayer === "player1"){
		currentPlayer = "player2";
	}else {
		currentPlayer = "player1";
	}
	$(".mainOptions > h4").html(currentPlayer);
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

//switch 
$('.startBattle').click(function (){
  console.log("test")
  $('.characterSelection').addClass("hide");
  $('.battleScreen').removeClass("hide");
})

function generateCard (pokemon){
  $('.cards').first().append('<div class="card"></div>');
  console.log(pokemon)
  $('.card').append('<h4>'+pokemon.name+'</h4>')
  $('.card').append('<p class="playerHealth">'+pokemon.health+'</p>')
  $('.card').append('<p class="playerMagic">'+pokemon.magic.maxMagic+'</p>')

}

console.log(pokemonArray)
generateCard(pokemonArray[0])


