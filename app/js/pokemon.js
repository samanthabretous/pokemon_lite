function Pokemon (name, health, magic, image){
  this.name = name;
  this.health = {
    maxHealth: health,
    currentHealth: health
  };
  this.magic = {
    maxMagic: magic, 
    currentMagic: magic
  };
  this.image = image;
  this.skills = {}
  this.pokemonSkills = [];
}
function AttackSkill (attackName, damage, magicNeeded) {
  this.attackName = attackName;
  this.damage = damage;
  this.magicNeeded = magicNeeded;
}
Pokemon.prototype.skillsToArray = function(){
  for(key in this.skills){
    this.pokemonSkills.push(key);
  }
}

Pokemon.prototype.learnAttackSkill = function (objAttachSkill) {
  //add skill that was used into the pokemon's skill object
  this.skills[objAttachSkill.attackName] = objAttachSkill;
}

Pokemon.prototype.attack = function (skillKey, pokemon) {
	if(this.magic < this.skills[skillKey].magicNeeded){
		console.log("not enough Magic!!!!");
	}else {
		pokemon.health.currentHealth -= this.skills[skillKey].damage;
		this.magic.currentMagic -= this.skills[skillKey].magicNeeded
		console.log(this.name + " launched skill " + skillKey + " successfully!");
		console.log(pokemon.name + " received " + this.skills[skillKey].damage +" damage");
		//pikachu launched skill 'lightning' successfully!
		//bulbasaur got 40 damage
		if(pokemon.health.currentHealth < 0){
		pokemon.health.currentMagic = 0;
		};
    var playerPassthrough = "";
    if(currentPlayer[currentPlayer.length-1] === "1"){
      playerPassthrough = 'Two';
    }else{
      playerPassthrough = 'One';
    }
    HealthBarLoss(this.skills[skillKey].damage, this.health.maxHealth, playerPassthrough);
	}
}


Pokemon.prototype.showStatus = function(){
  console.log(this.name + " status")
  console.log("health: " + this.health);
  console.log("magic: " + this.magic.currentMagic);
}

Pokemon.prototype.getMagic = function() {
  //10% of max magic
  //current magic can never go above max magic
  var addMagic = Math.round(this.magic.maxMagic * .10) 
  var updatedMagic = 0;
   this.magic.currentMagic += addMagic
    if(this.magic.currentMagic > this.magic.maxMagic){
      this.magic.currentMagic = this.magic.maxMagic
    }
  console.log("current", this.magic.currentMagic);
}
