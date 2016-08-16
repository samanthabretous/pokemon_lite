//perma create pokemon look up some pokemon adn their abilities and create both
// pokemon array
var pokemonArray = []

// pokemon
Pikachu = new Pokemon("Pikachu",100,100, "images/Pokémon_Charmander_art.png");
Pikachu2 = new Pokemon("Pikachu 2",100,100, "images/Pokémon_Charmander_art.png");
Pikachu3 = new Pokemon("Pikachu 3",100,100, "images/Pokémon_Charmander_art.png");
Pikachu4 = new Pokemon("Pikachu 4",100,100, "images/Pokémon_Charmander_art.png");
Bulbasaur = new Pokemon("Bulbasaur", 150, 150, "images/Pokémon_Bulbasaur_art.png");
Bulbasaur2 = new Pokemon("Bulbasaur1", 150, 150, "images/Pokémon_Bulbasaur_art.png");
pokemonArray.push(Pikachu, Bulbasaur, Pikachu2, Bulbasaur2, Pikachu3, Pikachu4);

//Pikachu abilites
var TailWhip = new AttackSkill("TailWhip",10,20);
var ThunderShock  = new AttackSkill("ThunderShock", 15,30);
var QuickAttack = new AttackSkill("QuickAttack", 8 , 0);
var ElectroBall = new AttackSkill("ElectroBall", 20 , 40);
Pikachu.learnAttackSkill(TailWhip);
Pikachu.learnAttackSkill(ThunderShock);
Pikachu.learnAttackSkill(QuickAttack);
Pikachu.learnAttackSkill(ElectroBall);

//Bulbasaur abilites
var Tackle = new AttackSkill("Tackle", 10, 20);
var LeechSeed = new AttackSkill("LeechSeed", 14, 30);
var VineWhip = new AttackSkill("VineWhip", 20, 50);
var PoisonPowder = new AttackSkill("PoisonPowder", 5, 0);
Bulbasaur.learnAttackSkill(Tackle);
Bulbasaur.learnAttackSkill(LeechSeed);
Bulbasaur.learnAttackSkill(VineWhip);
Bulbasaur.learnAttackSkill(PoisonPowder);

