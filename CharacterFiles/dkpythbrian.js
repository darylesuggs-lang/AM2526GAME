let config = {};

try {
    config = require('./gameConfig.json');
} catch (error) {
    config = {
        playerStats: { brianStartingHealth: 20 },
        friendshipThresholds: {
            MAX_FRIENDSHIP: 10,
            MIN_FRIENDSHIP: 0
        }
    };
}

// Brian's full state object
const brianState = {
    health: {
        current: config.playerStats?.brianStartingHealth || 20,
        max: config.playerStats?.brianStartingHealth || 20,
        isAlive: true,
    },
    inventory: [],
    location: 'start',
    friendship: 0,
    flags: {},
};

// Reset Brian to default state
function resetBrianState() {
    brianState.health.current = config.playerStats?.brianStartingHealth || 20;
    brianState.health.max = config.playerStats?.brianStartingHealth || 20;
    brianState.health.isAlive = true;

    brianState.inventory = [];
    brianState.location = 'start';
    brianState.friendship = 0;
    brianState.flags = {};
}

// Damage Brian
function takeDamage(amount) {
    brianState.health.current -= amount;
    if (brianState.health.current <= 0) {
        brianState.health.current = 0;
        brianState.health.isAlive = false;
    }
}

// Heal Brian
function heal(amount) {
    if (!brianState.health.isAlive) return;

    brianState.health.current += amount;
    if (brianState.health.current > brianState.health.max) {
        brianState.health.current = brianState.health.max;
    }
}

// Move Brian to a new location
function setLocation(newLocation) {
    brianState.location = newLocation;
}

// Add item to Brian’s inventory
function addItemToInventory(itemName, quantity = 1) {
    const item = brianState.inventory.find(i => i.name === itemName);
    if (item) {
        item.quantity += quantity;
    } else {
        brianState.inventory.push({ name: itemName, quantity });
    }
}

// Remove item from Brian’s inventory
function removeItemFromInventory(itemName, quantity = 1) {
    const index = brianState.inventory.findIndex(i => i.name === itemName);
    if (index === -1) return false;

    const item = brianState.inventory[index];
    if (item.quantity <= quantity) {
        brianState.inventory.splice(index, 1);
    } else {
        item.quantity -= quantity;
    }
    return true;
}

// Check if Brian has an item
function hasInventoryItem(itemName, quantity = 1) {
    const item = brianState.inventory.find(i => i.name === itemName);
    return item && item.quantity >= quantity;
}

// Friendship system for Brian
function changeFriendship(amount) {
    brianState.friendship += amount;

    const max = config.friendshipThresholds?.MAX_FRIENDSHIP || 10;
    const min = config.friendshipThresholds?.MIN_FRIENDSHIP || 0;

    if (brianState.friendship > max) brianState.friendship = max;
    if (brianState.friendship < min) brianState.friendship = min;
}

// Flags (for story events)
function setFlag(flagName, value) {
    brianState.flags[flagName] = value;
}

function getFlag(flagName) {
    return brianState.flags[flagName];
}

// Export Brian’s state + functions
module.exports = {
    brianState,
    resetBrianState,
    takeDamage,
    heal,
    setLocation,
    addItemToInventory,
    removeItemFromInventory,
    hasInventoryItem,
    changeFriendship,
    setFlag,
    getFlag,
};


