/**
 * @author JingAn Chen <lzsoft.cja@gmail.com>
 * @module PokerDeck
 */
const _symSuit = Symbol('suit');
const _symFaceValue = Symbol('faceValue');
const _symDeck = Symbol('deck');
const _symShuffled = Symbol('shuffled');
/**
 * @constant
 * @enum {number}
 * @readonly
 */
const POKER_SUITS = Object.freeze({
	CLUBS: 1,
	DIAMONDS: 2,
	HEARTS: 3,
	SPADES: 4
});
const POKER_FACE_VALUES = Object.freeze({
	ACE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
	SIX: 6,
	SEVEN: 7,
	EIGHT: 8,
	NINE: 9,
	TEN: 10,
	JACK: 11,
	QUEEN: 12,
	KING: 13
});
/**
 * @class
 * @classdesc This class represents a Poker Deck that includes shuffle() and dealOneCard() functions
 * @todo
 */
function capitalize(s) {
	return s[0].toUpperCase() + s.slice(1).toLowerCase();
}
class PokerDeck {
	/**
	 * @constructor
	 */
	constructor() {
		this[_symShuffled] = false;
		this[_symDeck] = [];
		for (let s of Object.values(POKER_SUITS)) {
			for (let v of Object.values(POKER_FACE_VALUES)) {
				const c = new PokerCard(s, v);
				console.log(Object.keys(c));
				this[_symDeck].push();
			}
		}
	}
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
 * @classdesc This class represents a Poker Card that contains a suit and a faceValue.
 * @todo
 */
class PokerCard {
	/**
	 * @constructor
	 * @param {POKER_SUITS | number} suit
	 * @param {number} faceValue
	 */
	constructor(suit, faceValue) {
		// if (!POKER_SUITS.values.includes(suit)) {
		// 	throw new Error('Parameter suit must be one of the POKER_SUIT enumeration');
		// }
		this[_symSuit] = suit;
		this[_symFaceValue] = faceValue;
	}
	/**
	 * @readonly
	 */
	get suit() {
		return this[_symSuit];
	}
	/**
	 * @readonly
	 */
	get suitName() {
		return Object.keys(POKER_SUITS).find(key => POKER_SUITS[key] === this[_symSuit]);
	}
	/**
	 * @readonly
	 */
	get faceValue() {
		return this[_symFaceValue];
	}
	/**
	 * @readonly
	 */
	get faceValueName() {
		return Object.keys(POKER_FACE_VALUES).find(key => POKER_FACE_VALUES[key] === this[_symFaceValue]);
	}
	/**
	 * @readonly
	 */
	get properName() {
		return capitalize(this.suitName) + ' ' + capitalize(this.faceValueName);
	}
}
exports.PokerDeck = PokerDeck;
exports.PokerCard = PokerCard;
exports.POKER_SUITS = POKER_SUITS;
const d = new PokerDeck();