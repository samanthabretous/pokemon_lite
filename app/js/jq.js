// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.
player1 = Pikachu;
$("#top-left").click(function(){
	player1.skills.forEach(function(value, key){
		console.log("value", value);
		console.log("key", key);
	})
});