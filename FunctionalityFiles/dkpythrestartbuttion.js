let boxiModule;
let inventoryModule;
let friendshipModule;

try {
    if (typeof require === 'function') {
        boxiModule = require('./dkpythboxi');
        inventoryModule = require('./dkpythinventory');
        friendshipModule = require('./dkpythfriendshipbar');
    }
} catch (error) {
    
}

function restartGame() {
    if (boxiModule && typeof boxiModule.resetBoxiState === 'function') {
        boxiModule.resetBoxiState();
    } else if (typeof resetBoxiState === 'function') {
        resetBoxiState();
    }

    if (inventoryModule && typeof inventoryModule.resetInventory === 'function') {
        inventoryModule.resetInventory();
    } else if (typeof resetInventory === 'function') {
        resetInventory();
    }

    if (friendshipModule && typeof friendshipModule.resetFriendship === 'function') {
        friendshipModule.resetFriendship();
    } else if (typeof resetFriendship === 'function') {
        resetFriendship();
    }

    return {
        status: 'reset',
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        restartGame,
    };
}
