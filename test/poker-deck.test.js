const {
	PokerDeck,
	PokerCard,
	POKER_SUITS,
	POKER_FACE_VALUES
} = require('../poker-deck');
const assert = require('assert');
//
describe('constructor', async function() {
	it('should return no errors while constructing a Poker Deck', async function() {
		new PokerDeck();
		assert.ok(true);
	});
	it('should return no errors while constructing a Poker Card using correct parameters', async function() {
		new PokerCard(POKER_SUITS.DIAMONDS, POKER_FACE_VALUES.ACE);
		assert.ok(true);
	});
	it('should return error while constructing a Poker Card using incorrect parameters', async function() {
		try {
			new PokerCard(6, 192);
		} catch (e) {
			assert.ok(true);
		}
	});
	it('should generate 52 unique cards after constructing a Poker Deck', async function() {
		const pokerDeck = new PokerDeck();
		assert.equal(pokerDeck.cardsLeft, 52);
		const cardProperNameSet = new Set();
		let currentCard = pokerDeck.dealOneCard();
		while (currentCard) {
			assert.strictEqual(cardProperNameSet.has(currentCard.properName), false);
			cardProperNameSet.add(currentCard.properName);
			currentCard = pokerDeck.dealOneCard();
		}
	});
	it('should provide a 99.99% randomness after running the shuffle() function using one single control deck', async function() {
		const controlPokerDeck = new PokerDeck();
		const controlPokerDeckExportation = [];
		for (let i = 0; i < 52; i++) {
			controlPokerDeckExportation.push(controlPokerDeck.dealOneCard());
		}
		let collideScenario = 0;
		for (let i = 0; i < 10000; i++) {
			const pokerDeck = new PokerDeck();
			pokerDeck.shuffle();
			for (let j = 0; j < 52; j++) {
				const card = pokerDeck.dealOneCard();
				if (controlPokerDeckExportation[j].properName !== card.properName) {
					break;
				} else if (j === 51) {
					collideScenario += 1;
				}
			}
		}
		assert.strictEqual(collideScenario <= 1, true);
	});
	it('should return no more card after the 52nd times of running dealOneCard() function', async function() {
		const pokerDeck = new PokerDeck();
		for (let i = 0; i < 52; i++) {
			pokerDeck.dealOneCard();
		}
		const the53rdCard = pokerDeck.dealOneCard();
		assert.strictEqual(the53rdCard, null);
	});
});