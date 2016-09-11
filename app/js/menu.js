// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.

// keeps track of current player
var currentPlayer = Player1;

// keeps track of what is being displayed
var displaying = "mainMenu";

//show current player name in player console
$(".mainOptions > h4").html(currentPlayer.name);

//check to see who turn it is
function whoseTurn() {
  if (currentPlayer == Player1) {
    var player = Player1;
    var otherPlayer = Player2;
  } else {
    var player = Player2;
    var otherPlayer = Player1;
  }
  return {
    player: player,
    otherPlayer: otherPlayer
  }
}

// ability to switch between players
function switchPlayers() {
  currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
  $(".mainOptions h4").html(currentPlayer.name);
};


//// DISPLAY DIFFERENT CONSOLE SCREENS------------
//// DISPLAY DIFFERENT CONSOLE SCREENS------------

// function mainDisplay(player, otherPlayer , $clicker) {
// 	// $('.menuOption > h6').removeAttr('class')
// 	// var mainMenuOptions = ["FIGHT", "PACK", "RUN", "POKEMON"]
// 	// for(var i = 0; i < 4; i++){
// 	// 	$('.menuOption > h6')[i].id = 'display-' + i;
// 	// 	$('.menuOption > h6')[i].innerText = mainMenuOptions[i];
// 	// }
// 	console.log(player)

// // what to display during the attack click
// function attackDisplay(player) {
// 	displaying = "attack"
// 	//show the first four available attacks
// 	for(var i = 0; i < 4; i++){
// 		$("#display-" + i).html(player.pokemon[0].pokemonSkills[i]);
// 	}
// };

//main display takes in current player as player, opponent as otherPlayer, and a jQuery object as $clicker. the jQuery clicker is used to know what was selected and tells the pokemon.attack method what attack to do, all Display functions should follow this interface(NOT A JS TERM BUT IT IS A PROGRAMING TERM) for its peramiters.
function menuOptions(player, otherPlayer , $clicker) {


  function mainDisplay() {
    displaying = "mainMenu";
    $("#display-0").html("FIGHT");
    $("#display-1").html("PACK");
    $("#display-2").html("RUN");
    $("#display-3").html("POKEMON");
  }

	// if the screen was attack before should go into the next  if statement 
  switch (displaying){
    case "attack":
      attackPlayer();
      break;
    case "pack":
      player.pokemon[0].getMagic();
      mainDisplay();
      break;
    case "pokemonDisplay":
      switchPokemon();
      displayPlayers(player);
      break;
    default:
      mainDisplay();
  }
	
  function attackPlayer(){
    if (currentPlayer == Player1){
      player.pokemon[0].attack($clicker.html(), otherPlayer.pokemon[0]);
    }else {
      player.pokemon[0].attack($clicker.html(), Player1.pokemon[0]);
    }

    mainDisplay();
  }

  function switchPokemon() {
    for (var i = 0; i < player.pokemon.length; i++) {
      if(player.pokemon[i].name === $clicker.text()){
        var selected = player.pokemon.splice(i,1);
        player.pokemon.unshift(selected[0])
      }
    }
    mainDisplay();
  }


	switchPlayers();

};


// what to display during the attack click
function attackDisplay(player, $clicker) {
  displaying = "attack"
    //show the first four available attacks
  for (var i = 0; i < 4; i++) {
    $("#display-" + i).html(player.pokemon[0].pokemonSkills[i]);
  }
};

// display the stuff in the players pack.
function packDisplay(player) {
  displaying = "pack";
  $("#display-0").html("Raspberries");
  $("#display-1").html("");
  $("#display-2").html("");
  $("#display-3").html("");
};

// reset the game
function runDisplay() {
}


function pokemonDisplay(player) {
  displaying = "pokemonDisplay";

  //show the other pokemon user can choose from
  for (var i = 0; i < 4; i++) {
    $("#display-" + i).html(player.pokemon[i+1].name);
  }
}



// SWITCH CASES FOR BUTTONS ----------
// SWITCH CASES FOR BUTTONS ----------

// switch cases for buttons if display-0 is clicked differnt options based on the displaying variable same for all display-x on clicks
$("#display-0").on('click', function(){
	var whichPlayer = whoseTurn();
	switch (displaying){
		case "mainMenu" :
			attackDisplay(whichPlayer.player);
			break;
		default:
			menuOptions(whichPlayer.player, whichPlayer.otherPlayer ,$("#display-0"));
	};
});

$("#display-1").on('click', function() {
  var whichPlayer = whoseTurn();
  switch (displaying) {
    case "mainMenu":
      packDisplay(whichPlayer.player);
      break;
    default:
      menuOptions(whichPlayer.player, whichPlayer.otherPlayer, $("#display-1"));
  };
});

$("#display-2").on('click', function() {
  var whichPlayer = whoseTurn();
  switch (displaying) {
    case "mainMenu":
      runDisplay();
      break;
    default:
      menuOptions(whichPlayer.player, whichPlayer.otherPlayer, $("#display-2"));
  };
});

$("#display-3").on('click', function() {
  var whichPlayer = whoseTurn();
  switch (displaying) {
    case "mainMenu":
      pokemonDisplay(whichPlayer.player);
      break;
    default:
      menuOptions(whichPlayer.player, whichPlayer.otherPlayer, $("#display-3"));
  };
});
