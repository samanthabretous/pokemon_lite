// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.
player1 = Pikachu;
$("#top-left").click(function(){
	player1.skills.forEach(function(value, key){
		console.log("value", value);
		console.log("key", key);
	})
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

