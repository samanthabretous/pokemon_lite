function HealthBarLoss (damage, maxHealth, player){
	var player = "player" + player + "HpBar";
	var percentageOfHealthTaken = damage / maxHealth;
	var widthToRemove = percentageOfHealthTaken * 250;
	var newWidth = $("#"+player).width() - widthToRemove;
	if (newWidth < 0 ){ 
		newWidth = 0;
	};
	$("#"+player).animate({width: newWidth+"px"});
}
