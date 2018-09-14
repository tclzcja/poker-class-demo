/**
 * @author JingAn Chen <lzsoft.cja@gmail.com>
 * @module PokerDeck
 */
/**
 * @constant
 * @enum {number}
 * @readonly
 */
const POKER_SUITS = {
	CLUBS: 1,
	DIAMONDS: 2,
	HEARTS: 3,
	SPADES: 4
};
/**
 * @class
 * @classdesc This class represents a Poker Deck that includes shuffle() and dealOneCard() functions
 * @todo
 */
class PokerDeck {
	/**
	 * @constructor
	 */
	constructor() {}
	shuffle() {
		// return thirdPartyLib.shuffle(this);
		// Just kidding :)
		// Use Fisher Yates algorithm here.
	}
	dealOneCard() {
		// return fourthPartyLib.dealOneCard(this);
		// Just kidding :)
		// Must deal with the scenario that the deck is NOT shuffled at the beginning and dealOneCard() get called immediately.
	}
}
/**
 * @class
 * @classdesc This class represents a Poker Card that contains a
 * @todo
 */
class PokerCard {
	/**
	 * @constructor
	 * @param {POKER_SUITS | number} suit
	 * @param {number} faceValue
	 */
	constructor(suit, faceValue) {
		this._suitSym = Symbol('suit');
		this._faceValueSym = Symbol('faceValue');
	}
	get suit() {}
	get faceValue() {}
}
export {
	PokerDeck,
	PokerCard,
	POKER_SUITS
};