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
	if(this.magic <= this.skills){}
}

Pokemon.prototype.showStatus = function(){
  console.log(this.health + this.magic);
}

Pokemon.prototype.getMagic = function() {
  //10% of max magic
  //current magic can never go above max magic
}

function gameOver() {

}

function reset() {

}

// var pikachu = new Pokemon("pikachu", 120, 80);
// var poisonSeed = new AttackSkill ("poison seed", 20, 20);
// var lightning = new AttackSkill("lightning", 40, 30);
// pikachu.learnAttackSkill(poisonSeed)
// pikachu.learnAttackSkill(lightning)
// console.log(pikachu.skills.lightning);
