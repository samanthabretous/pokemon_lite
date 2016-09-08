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
	$("#display-0").html(player.pokemon[0].pokemonSkills[0]);
	$("#display-1").html(player.pokemon[0].pokemonSkills[1]);
	$("#display-2").html(player.pokemon[0].pokemonSkills[2]);
	$("#display-3").html(player.pokemon[0].pokemonSkills[3]);
};

function mainDisplay(player, otherPlayer , $clicker) {
	if (displaying == "attack"){
		if (currentPlayer == "player1"){
			player.pokemon[0].attack($clicker.html(), otherPlayer.pokemon[0]);
		}else {
			player.pokemon[0].attack($clicker.html(), Player1.pokemon[0]);
		}
	}else if(displaying == "pack"){
		player.pokemon[0].getMagic();
	}
	displaying = "mainMenu";
	switchPlayers();
	$("#display-0").html("FIGHT");
	$("#display-1").html("PACK");
	$("#display-2").html("RUN");
	$("#display-3").html("COOL");
};

function packDisplay (player){
	displaying = "pack";
	$("#display-0").html("Raspberries");
	$("#display-1").html("");
	$("#display-2").html("");
	$("#display-3").html("");
};

function pokemonDisplay (player, otherPlayer, jqselection){
	displaying = pokemonDisplay;
	$("#display-0").html(player.pokemon[1].name);
	$("#display-1").html(player.pokemon[2].name);
	$("#display-2").html(player.pokemon[3].name);
	$("#display-3").html(player.pokemon[4].name);
}


// switch cases for buttons
$("#display-0").on('click', function(){
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
			mainDisplay(player, otherPlayer ,$("#display-0"));
	};
});


$("#display-1").on('click', function(){
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
			mainDisplay(player, otherPlayer, $("#display-1"));
	};
});

$("#display-2").on('click', function(){
	if(currentPlayer == "player1"){
		var player = Player1;
		var otherPlayer = Player2;
	}else {
		var player = Player2;
		var otherPlayer = Player1;
	}
	switch (displaying){
		case "mainMenu" :
			mainDisplay(player, otherPlayer, $("#display-2"));
			break;
		default:
			mainDisplay(player, otherPlayer, $("#display-2"));
	};
});

$("#display-3").on('click', function(){
	if(currentPlayer == "player1"){
		var player = Player1;
		var otherPlayer = Player2;
	}else {
		var player = Player2;
		var otherPlayer = Player1;
	}
	switch (displaying){
		case "mainMenu" :
			pokemonDisplay(player, otherPlayer, $("#display-3"));
			break;
		default:
			mainDisplay(player, otherPlayer, $("#display-3"));
	};
});














