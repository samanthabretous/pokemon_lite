//if at anypoint Health is being used or given call this function
function healthBarMovement(damage, maxHealth, player) {
    // debugger;
    var player = "player" + player + "HpBar";
    var percentageOfHealthTaken = damage / maxHealth;
    var widthToRemove = percentageOfHealthTaken * 250;
    var newWidth = $("#" + player).width() + widthToRemove;
    if (newWidth < 0) {
        newWidth = 0;
    };
    $("#" + player).animate({ width: newWidth + "px" });
}


//if at anypoint magic is being used or given call this function
function magicBarMovement(MagicUsed, maxMagic, player) {
    var playerPoints = "player" + player + "MagicPoints";
    var player = "player" + player + "MagicBar";
    currentMagic = currentPlayer.pokemon[0].magic.currentMagic;
    var percentageOfMagicTaken = MagicUsed / maxMagic;
    var widthToRemove = percentageOfMagicTaken * 270;
    var newWidth = $("#" + player).width() + widthToRemove;
    if (newWidth < 0) {
        newWidth = 0;
    };
    $("#" + player).animate({ width: newWidth + "px" });

    //these function will decement or increment the magic points above the magic bar
    function decrement(){
    	// debugger;
        $('#' + playerPoints).text(parseInt($('#' + playerPoints).text()) - 1)
        if($('#' + playerPoints).text() > currentMagic){
            setTimeout(decrement, 10)
        };
    }
    function increment(){
    	// debugger;
        $('#' + playerPoints).text(parseInt($('#' + playerPoints).text()) + 1)
        if($('#' + playerPoints).text() < currentMagic){
            setTimeout(increment, 10)
        };
    }
    // debugger;
    // calls the correct function base on if  MagicUsed is positive or negative
    if (MagicUsed < 0) {
    	decrement();
    } else {
    	increment();
    }
    
}
