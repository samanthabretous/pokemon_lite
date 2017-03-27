//perma create pokemon look up some pokemon adn their abilities and create both
// pokemon array
var pokemonArray = []

// pokemon
var Pikachu = new Pokemon("Pikachu",100,100, "images/Pikachu.png");
var Bulbasaur = new Pokemon("Bulbasaur", 150, 150, "images/Pokémon_Bulbasaur_art.png");
var Charmander = new Pokemon("Charmander", 150 , 200, "images/Pokémon_Charmander_art.png");
var Squirtle =  new Pokemon("Squirtle", 200 , 100, "images/Squirtle.png");
var Caterpie = new Pokemon("Caterpie", 120 , 200, "images/Caterpie.png");
var Weedle = new Pokemon("Weedle", 120, 200, "images/Weedle.png");
var Pidgey = new Pokemon("Pidgey", 120, 200, "images/Pidgey.png");
var Rattata = new Pokemon("Rattata", 100 ,150 , "images/Rattata.png");
var Spearow = new Pokemon("Spearow", 100 ,150 , "images/Spearow.png");
var Ekans = new Pokemon("Ekans", 100 ,150 , "images/Ekans.png");
var Sandshrew = new Pokemon("Sandshrew", 100 ,150 , "images/Sandshrew.png");
var Nidoran = new Pokemon("Nidoran", 100 ,150 , "images/Nidoran.png");
var Clefairy = new Pokemon("Clefairy", 100 ,150 , "images/Clefairy.png");
var Vulpix = new Pokemon("Vulpix", 100 ,150 , "images/Vulpix.png");

pokemonArray.push(Pikachu, Bulbasaur, Charmander, Squirtle, Caterpie, Weedle, Pidgey, Rattata, Spearow, Ekans, Sandshrew, Nidoran, Clefairy, Vulpix);

//Pikachu abilites
var TailWhip = new AttackSkill("Tail Whip",10,20);
var ThunderShock  = new AttackSkill("Thunder Shock", 15,30);
var QuickAttack = new AttackSkill("Quick Attack", 8 , 0);
var ElectroBall = new AttackSkill("Electro Ball", 20 , 40);
Pikachu.learnAttackSkill(TailWhip);
Pikachu.learnAttackSkill(ThunderShock);
Pikachu.learnAttackSkill(QuickAttack);
Pikachu.learnAttackSkill(ElectroBall);

//Bulbasaur abilites
var Tackle = new AttackSkill("Tackle", 10, 20);
var LeechSeed = new AttackSkill("Leech Seed", 14, 30);
var VineWhip = new AttackSkill("Vine Whip", 20, 50);
var PoisonPowder = new AttackSkill("Poison Powder", 5, 0);
Bulbasaur.learnAttackSkill(Tackle);
Bulbasaur.learnAttackSkill(LeechSeed);
Bulbasaur.learnAttackSkill(VineWhip);
Bulbasaur.learnAttackSkill(PoisonPowder);

//Charmander Abilites
var Growl = new AttackSkill("Growl" , 5, 15);
var Scratch = new AttackSkill("Scratch" , 15, 30);
var Ember = new AttackSkill("Ember", 25 , 45);
var FireFang =  new AttackSkill("Fire Fang", 60, 165);
Charmander.learnAttackSkill(Growl);
Charmander.learnAttackSkill(Scratch);
Charmander.learnAttackSkill(Ember);
Charmander.learnAttackSkill(FireFang);

// Squirtle Abilites
// tackle
// tailWhip
var WaterGun = new AttackSkill("Water Gun" , 30 , 30);
var Bubble = new AttackSkill("Bubble" , 40, 40);
Squirtle.learnAttackSkill(Tackle);
Squirtle.learnAttackSkill(TailWhip);
Squirtle.learnAttackSkill(WaterGun);
Squirtle.learnAttackSkill(Bubble);

//Caterpie abilites
var StringShot = new AttackSkill("String Shot", 10,50);
//tackle
var BugBite = new AttackSkill("Bug Bite", 20 ,60);
var ElectroWeb = new AttackSkill("Electro Web", 30, 75);
Caterpie.learnAttackSkill(StringShot);
Caterpie.learnAttackSkill(Tackle);
Caterpie.learnAttackSkill(BugBite);
Caterpie.learnAttackSkill(ElectroWeb);

//Weedle abilites
var PoisonSting = new AttackSkill("Poison Sting", 30, 45);
//string shot
//bugBite
//electroWeb
Weedle.learnAttackSkill(PoisonSting);
Weedle.learnAttackSkill(StringShot);
Weedle.learnAttackSkill(BugBite);
Weedle.learnAttackSkill(ElectroWeb);

//Pidgey abilites
//Tackle
var SandAttack = new AttackSkill("Sand Attack", 30, 50);
var Gust = new AttackSkill("Gust", 45 ,60);
//QuickAttack
Pidgey.learnAttackSkill(Tackle);
Pidgey.learnAttackSkill(SandAttack);
Pidgey.learnAttackSkill(Gust);
Pidgey.learnAttackSkill(QuickAttack);

// Rattata abilites
//tackle
//tailWhip
//QuickAttack
var FocusEnergy = new AttackSkill("Focus Energy", 20 ,30);
Rattata.learnAttackSkill(Tackle);
Rattata.learnAttackSkill(TailWhip);
Rattata.learnAttackSkill(QuickAttack);
Rattata.learnAttackSkill(FocusEnergy);



// Spearow abilites
// Growl 
var Peck = new AttackSkill("Peck", 20, 30);
var FuryAttack = new AttackSkill("Fury Attack", 40, 40);
var Pursuit = new AttackSkill("Pursuit", 35, 35);
Spearow.learnAttackSkill(Growl);
Spearow.learnAttackSkill(Peck);
Spearow.learnAttackSkill(FuryAttack);
Spearow.learnAttackSkill(Pursuit);

// Ekans abilites
var Wrap = new AttackSkill("Wrap", 25 ,30);
// PoisonSting
var Bite  = new AttackSkill("Bite", 30 ,45);
var Acid = new AttackSkill("Acid",50,  70);

// abilities temp
// Sandshrew
Sandshrew.learnAttackSkill(Growl);
Sandshrew.learnAttackSkill(Peck);
Sandshrew.learnAttackSkill(FuryAttack);
Sandshrew.learnAttackSkill(Pursuit); 
// Nidoran
Nidoran.learnAttackSkill(Growl);
Nidoran.learnAttackSkill(Peck);
Nidoran.learnAttackSkill(FuryAttack);
Nidoran.learnAttackSkill(Pursuit);
// Clefairy =
Clefairy.learnAttackSkill(Growl);
Clefairy.learnAttackSkill(Peck);
Clefairy.learnAttackSkill(FuryAttack);
Clefairy.learnAttackSkill(Pursuit);
// Vulpix = 
Vulpix.learnAttackSkill(Growl);
Vulpix.learnAttackSkill(Peck);
Vulpix.learnAttackSkill(FuryAttack);
Vulpix.learnAttackSkill(Pursuit);


// pushing all skills to an array

Pikachu.skillsToArray();
Bulbasaur.skillsToArray();
Charmander.skillsToArray();
Squirtle.skillsToArray();
Caterpie.skillsToArray();
Weedle.skillsToArray();
Pidgey.skillsToArray();
Rattata.skillsToArray();
Spearow.skillsToArray();
Ekans.skillsToArray();
Sandshrew.skillsToArray();
Nidoran.skillsToArray();
Clefairy.skillsToArray();
Vulpix.skillsToArray();




