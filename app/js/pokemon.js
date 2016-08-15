//perma create pokemon look up some pokemon adn their abilities and create both
// pokemon array
var pokemonArray = []

// pokemon
Pikachu = new Pokemon("Pikachu",100,100);
Bulbasaur = new Pokemon("Bulbasaur", 150, 150);
pokemonArray.push(Pikachu, Bulbasaur);

//Pikachu abilites
TailWhip = new AttackSkill("TailWhip",10,20);
ThunderShock  = new AttackSkill("ThunderShock", 15,30);
QuickAttack = new AttackSkill("QuickAttack", 8 , 0);
ElectroBall = new AttackSkill("ElectroBall", 20 , 40);
Pikachu.learnAttackSkill(TailWhip);
Pikachu.learnAttackSkill(ThunderShock);
Pikachu.learnAttackSkill(QuickAttack);
Pikachu.learnAttackSkill(ElectroBall);

//Bulbasaur abilites
Tackle = new AttackSkill("Tackle", 10, 20);
LeechSeed = new AttackSkill("LeechSeed", 14, 30);
VineWhip = new AttackSkill("VineWhip", 20, 50);
PoisonPowder = new AttackSkill("PoisonPowder", 5, 0);
Bulbasaur.learnAttackSkill(Tackle);
Bulbasaur.learnAttackSkill(LeechSeed);
Bulbasaur.learnAttackSkill(VineWhip);
Bulbasaur.learnAttackSkill(PoisonPowder);