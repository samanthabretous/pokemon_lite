// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.
var currentPlayer = "player1"
var player1 = new Player(Pikachu);
var displaying = "mainMenu";
function attackDisplay() {
	displaying = "attack"
	console.log("it works")
	$("#top-left").html("<h6 id=\"top-left\">"+player1.pokemonSkills[0]+"</h6>")
	$("#top-right").html("<h6 id=\"top-right\">"+player1.pokemonSkills[1]+"</h6>");
	$("#bottom-left").html("<h6 id=\"bottom-left\">"+player1.pokemonSkills[2]+"</h6>");
	$("#top-right").html("<h6 id=\"bottom-right\">"+player1.pokemonSkills[3]+"</h6>");
};
player1.skillsToArray();
$("#top-left").on('click', attackDisplay);