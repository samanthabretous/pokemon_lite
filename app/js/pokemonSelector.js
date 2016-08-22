// generate card info based on each pokemon object
function generateCard (player, pokemon, cardNumber){
  $(player + ' .playerCards').append('<div class="card card' + cardNumber + '"></div>');

  var card = player + " .playerCards .card" + cardNumber;
  
  //add pokemon name
  $(card).append('<h4>'+ pokemon.name.toUpperCase() +'</h4>');

  // //add health
  $(card).append('<p class="playerHealth">'+pokemon.health.maxHealth +' HP</p>');

  //add magic
  $(card).append('<p class="playerMagic">'+ pokemon.magic.maxMagic+' MAGIC</p>');

  // //add image
  $(card).append('<div class="char char' + cardNumber +  '"></div>')

  $(player + " .playerCards .card .char" + cardNumber).append('<img src ="' + pokemon.image + '">');

  // add attack skills
  $(card).append('<ul class="attack'+cardNumber+'"><span>ATTACKS</span></ul>');
  $.each(pokemon.skills, function (key, value){
    $(player + ' .playerCards .card ul .attack'+cardNumber).append('<li>'+key+'</li>')
  });
  
}

//display pokemon cards 
for(var i = 0; i < pokemonArray.length; i++){
  var displayPokemon = generateCard(".playerOneOptions",pokemonArray[i], i+1);
  $('.playerOneOptions').append(displayPokemon)
}
for(var i = 0; i < pokemonArray.length; i++){
  var displayPokemon = generateCard(".playerTwoOptions",pokemonArray[i], i+1);
  $('.playerTwoOptions').append(displayPokemon)
}

$('.playerTwoOptions').hide();
$('.startBattle').hide();

//rotate cards

setInterval(function(){
  $('.slideshow .card').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  if (next.next().length>0) {
 
      next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');
      
  }
  else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
     
  }
});

},1000)





