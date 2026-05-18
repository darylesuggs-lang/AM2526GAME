
const enemies = [
  {
    name: "Chris Chan",
    hp: 30,
    attacks: [
      { name: "Sonichu Bolt", damage: 2 },
      { name: "Rage", damage: 2 }
    ]
  },
  {
    name: "Triple T",
    hp: 30,
    attacks: [
      { name: "Triple Smash", damage: 2, targets: "both" }, // damages both player and Brian
      { name: "Batter Barrage", damage: 1, hits: "1-3" } // 1-3 hits of 1 damage each
    ]
  },
  {
    name: "Evil Little Green Goblin Creature",
    hp: 25,
    attacks: [
      { name: "Steal", damage: 0, effect: "steal_first_item" }, // steals first inventory item
      { name: "Tickle", damage: 2 }
    ]
  },
  {
    name: "Sentient Letter B",
    hp: 35,
    attacks: [
      { name: "A B Crush", damage: 2 },
      { name: "B Heal", damage: 0, effect: "heal_self", amount: 2 }
    ]
  },
  {
    name: "Tumblr Millennial",
    hp: 25,
    attacks: [
      { name: "Consumerism", damage: 0, effect: "heal_self", amount: 1 },
      { name: "Callout Post", damage: 2, targets: "spread" } // damages all party members
    ]
  },
  {
    name: "Freddy Fazbear",
    hp: 25,
    attacks: [
      { name: "Hor Hor Hor Hor", damage: 2, targets: "both" },
      { name: "Jumpscare", damage: 5, recoil: 2 }
    ]
  },
  {
    name: "Single Colored Sphere",
    hp: 35,
    attacks: [
      { name: "Spin", damage: 2 },
      { name: "Find Circumference", damage: 3 }
    ]
  }
];

// Function to get enemy by name
function getEnemy(name) {
  return enemies.find(enemy => enemy.name === name);
}

// Function to apply attack effects 
function applyAttack(attacker, target, attack) {
  // This would be implemented in the battle system
  // For now, just return the attack data
  return attack;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    enemies,
    getEnemy,
    applyAttack
  };
}