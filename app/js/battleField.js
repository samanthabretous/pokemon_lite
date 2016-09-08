//switch the screen from card selection to battle screen
$('.startBattle').click(function (){
  debugger;
  $('.characterSelection').addClass("hide");
  $('.battleScreen').removeClass("hide");
  displayPlayers(Player1);
  displayPlayers(Player2);

  //pokemon slide in for battle
  $('.playerOne').animate({
    left: "-=700",
  }, 2500);
  $('.playerTwo').animate({
    left: "+=700",
  }, 2500);
})


// display on battle screen the infomation about player 1 and tow
function displayPlayers(player){
  var num;
  player == Player1 ? num = "One" : num = "Two"
  
  $('.player' + num + 'Name').text(player.pokemon.name);
  $('.status' + num + ' p span').text(player.pokemon.magic.maxMagic);
  $(".player" + num + "Img > img").attr("src", player[pokemon].image);
  //$(".playerTwoImg > img").attr("src", Player2.pokemon.image);

}
playerOneSelectCard();