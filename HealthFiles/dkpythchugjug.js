
const { boxiState, heal: healBoxi } = require('./dkpythboxi');
const { brianState, heal: healBrian } = require('./dkpythbrian');
const inventoryModule = require('./dkpythinventory');

// Fully heal Boxi
function fullHealBoxi() {
    if (!boxiState.health.isAlive) return;
    healBoxi(boxiState.health.max);
}

// Fully heal Brian
function fullHealBrian() {
    if (!brianState.health.isAlive) return;
    healBrian(brianState.health.max);
}

// Main use function
function useChugJug() {
    if (!inventoryModule.hasItem("Chug Jug", 1)) {
        return { success: false, message: "You don't have a Chug Jug!" };
    }

    // Heal both characters to full
    fullHealBoxi();
    fullHealBrian();

    // Remove the item from inventory
    inventoryModule.useItem("Chug Jug");

    return {
        success: true,
        message: "You drank the Chug Jug! You and Brian are fully healed."
    };
}

module.exports = {
    useChugJug
};
