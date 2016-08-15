// once the player choses its pokemon create an array with all available attacks. make player an object where we can store the pokemon he selected, all available skills current health current magic.
player1 = Pikachu;
$("#top-left").click(function(){
	player1.skills.forEach(function(value, key){
		console.log("value", value);
		console.log("key", key);
	})
});

//switch the screen from card selection to battle screen
$('.startBattle').click(function (){
  console.log("test")
  $('.characterSelection').addClass("hide");
  $('.battleScreen').removeClass("hide");
})

function generateCard (pokemon){
  $('.cards').first().append('<div class="card"></div>');
  console.log(pokemon)

  //add pokemon name
  $('.card').append('<h4>'+pokemon.name.toUpperCase()+'</h4>');

  //add health
  $('.card').append('<p class="playerHealth">'+pokemon.health+' HP</p>');

  //add magic
  $('.card').append('<p class="playerMagic">'+ pokemon.magic.maxMagic+' MAGIC</p>');

  //add image
  $('.card').append('<div class="char"></div>')
  $('.char').append('<img src ="' +pokemon.image+'">');

  $('.card').append('<ul><span>ATTACKS</span></ul>');

  $.each(pokemon.skills, function (key, value){
    $('ul').append('<li>'+key+'</li>')
  });
  

  

}

console.log(pokemonArray)
generateCard(pokemonArray[1])

