
function Pokemon (name, health, magic){
  this.name = name;
  this.health = health;
  this.magic = {
    maxMagic: magic, 
    currentMagic: magic
  };
  this.skills = {}
}

function AttackSkill (attackName, damage, magicNeeded) {
  this.attackName = attackName;
  this.damage = damage;
  this.magicNeeded = magicNeeded;
}

Pokemon.prototype.learnAttackSkill = function (objAttachSkill) {
  //add skill that was used into the pokemon's skill object
  this.skills[objAttachSkill.attackName] = objAttachSkill;
}

Pokemon.prototype.attack = function (skillKey, pokemon) {
	if(this.magic < this.skills[skillKey].magicNeeded){
		console.log("not enough Magic!!!!");
	}else {
		pokemon.health -= this.skills[skillKey].damage;
		this.magic.currentMagic -= this.skills[skillKey].magicNeeded
		console.log(this.name + " launched skill " + skillKey + " successfully!");
		console.log(pokemon.name + " received " + this.skills[skillKey].damage +" damage");
		//pikachu launched skill 'lightning' successfully!
		//bulbasaur got 40 damage
		if(pokemon.health < 0){
		pokemon.health = 0;
		}
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
  console.log("current", this.magic.currentMagic)

    this.magic.currentMagic += addMagic
    if(this.magic.currentMagic > this.magic.maxMagic){
      this.magic.currentMagic = this.magic.maxMagic
    }
}

function gameOver() {

}

function reset() {

}

//****************
// USE FOR TESTING
//****************

// var pikachu = new Pokemon("pikachu", 120, 80);
// var bulbasaur = new Pokemon("bulbasaur", 95, 105);
// var poisonSeed = new AttackSkill ("poison seed", 20, 20);
// var lightning = new AttackSkill("lightning", 40, 30);
// pikachu.learnAttackSkill(poisonSeed)
// pikachu.learnAttackSkill(lightning)
// pikachu.attack("lightning", bulbasaur);
// pikachu.getMagic()
// pikachu.showStatus()

