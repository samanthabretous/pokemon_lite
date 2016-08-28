// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.

// keeps track of current player
var currentPlayer = "player1";
var Player1;
var Player2;
$(".mainOptions > h4").html(currentPlayer);

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
	$("#top-left").html(player.pokemon.pokemonSkills[0]);
	$("#top-right").html(player.pokemon.pokemonSkills[1]);
	$("#bottom-left").html(player.pokemon.pokemonSkills[2]);
	$("#bottom-right").html(player.pokemon.pokemonSkills[3]);
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














