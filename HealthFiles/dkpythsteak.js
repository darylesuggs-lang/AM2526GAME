(function(){
	function createSteakItem(quantity = 1) {
		return {
			name: 'steak',
			description: 'A beefy steak. Restores health.',
			quantity: quantity,
			healAmount: 0
		};
	}

	function useSteak(boxiState) {
		if (!boxiState || !boxiState.health) return false;
		if (!boxiState.health.isAlive) return false;

		const idx = boxiState.inventory.findIndex(i => i.name === 'steak');
		if (idx === -1) return false;

		// consume one steak
		const item = boxiState.inventory[idx];
		if (item.quantity > 1) {
			item.quantity -= 1;
		} else {
			boxiState.inventory.splice(idx, 1);
		}

		// heal boxi
		const healAmount = item.healAmount || 0;
		boxiState.health.current += healAmount;
		if (boxiState.health.current > boxiState.health.max) {
			boxiState.health.current = boxiState.health.max;
		}

		return true;
	}

	module.exports = {
		createSteakItem,
		useSteak,
	};
})();

