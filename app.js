function Pokemon (name, health, magic){
  this.name = name;
  this.health = health;
  this.magic = {
    maxMagic: magic, 
    currentMagic: magic
  };
  this.skills = {}
}

function AttackSkills (attackName, damage, magicNeeded) {
  this.attackName = attackName;
  this.damage = damage;
  this.magicNeeded = magicNeeded;
}

Pokemon.prototype.learnAttackSkill = function (objAttachSkill) {

}

Pokemon.prototype.attack = function (skillKey, pokemon) {

}

Pokemon.prototype.showStatus = function(){
  console.log(this.health + this.magic)
}

Pokemon.prototype.getMagic = function() {
  //10% of max magic
  //current magic can never go above max magic
}

function gameOver() {

}

function reset() {
  
}