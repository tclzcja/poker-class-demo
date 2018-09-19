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

function randomIntInclusiveFromZero(max) {
	max = Math.floor(max);
	return Math.floor(Math.random() * (max + 1));
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
				this[_symDeck].push(new PokerCard(s, v));
			}
		}
	}
	shuffle() {
		for (let i = this[_symDeck].length - 1; i > 0; i--) {
			const r = randomIntInclusiveFromZero(i);
			let t = this[_symDeck][r];
			this[_symDeck][r] = this[_symDeck][i];
			this[_symDeck][i] = t;
		}
		this[_symShuffled] = true;
	}
	dealOneCard() {
		if (this[_symDeck].length > 0) {
			return this[_symDeck].splice(randomIntInclusiveFromZero(this[_symDeck].length - 1), 1)[0];
		} else {
			return null;
		}
	}
	get cardsLeft() {
		return this[_symDeck].length;
	}
	get shuffled() {
		return this[_symShuffled];
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
		if (!Object.values(POKER_SUITS).includes(suit)) {
			throw new Error('Parameter suit must be one of the POKER_SUIT enum');
		}
		if (!Object.values(POKER_FACE_VALUES).includes(faceValue)) {
			throw new Error('Parameter faceValue must be one of the POKER_FACE_VALUE enum');
		}
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
exports.POKER_FACE_VALUES = POKER_FACE_VALUES;