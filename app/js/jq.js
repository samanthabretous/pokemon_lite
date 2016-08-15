// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.

var currentPlayer = "player1"
var player1 = new Player(Pikachu);
player1.skillsToArray();
var displaying = "mainMenu";
function attackDisplay() {
	displaying = "attack"
	console.log("it works")
	$("#top-left").html(player1.pokemonSkills[0]);
	$("#top-right").html(player1.pokemonSkills[1]);
	$("#bottom-left").html(player1.pokemonSkills[2]);
	$("#bottom-right").html(player1.pokemonSkills[3]);
};
$("#top-left").on('click', attackDisplay);

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


