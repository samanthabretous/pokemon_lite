# Pokemon Lite

A simplified version of pokemon! Player 1 battles Player 2 for a fight to the death victory.

## How to play:
Each player takes turns choosing 5 different pokemon. Once completed, press battle to begin. Choose your pokemon and make an attack. Then the other opponent will do the same. Be careful not to get attacked or you can watch your health points get deleted. Play the game until all you have killed all 5 of the opponents pokemon.

## Live Demo:
[Play the game](http://samanthabretous.com/pokemon_lite)

## Functionality:
1. A `Pokemon` constructor function creates new pokemon that have name, health , magic and a bunch of skills.
2. An `AttackSkill` constructor creates new attacks. Attacks consumes the pokemon's magic to cause damage to other pokemons. Each individual pokemon has a specific set of attacks. The `AttackSkill` method takes in three arguments: the name of the attack, the amount of damage the attack does, and the amount of magic the attack requires.
3. A pokemon has no skills when created. it uses the method `learnAttackSkill` to learn a new skill. `learnAttackSkill` takes an attack object as an argument. The specific attacks are created using the `attackSkill` constructor function, and then internally added to that Pokemon's 'skills' array. Here is an example of first creating a skill, then adding it to a Pokemon: `var lightning = new AttackSkill("lightning", 40, 30); pikachu.learnAttackSkill(lightning);`
4. Each pokemon has a method called `showStatus` that logs its status (how much health, magic left)
5. Each pokemon has a method called `attack` which picks one of the pokemon's attack skills to attack another pokemon. This is its most important method!
6. A method called `getMagic` helps your pokemon add some magic back to your Pokemon.


## Web interface:

A simple website (using HTML, CSS, and jQuery) that lets two people battle each other.
