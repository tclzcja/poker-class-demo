import {
	PokerDeck,
	PokerCard,
	POKER_SUITS
} from "../../poker-deck.js";
const assert = require('assert');
describe('interface', async function() {
	const knex = await database.init();
	describe('class.js', async function() {
		before(async function() {});
		after(async function() {});
		describe('POST()', async function() {
			it('should return 400 if school or name is not provided', async function() {
				assert.strictEqual(response.statusCode, 400);
			});
			it('should return 201 if successful', async function() {
				assert.strictEqual(response.statusCode, 201);
			});
		});
		describe('PUT()', async function() {
			it('should return 200 if successful', async function() {
				assert.strictEqual(response.statusCode, 200);
			});
		});
		describe('GET()', function() {
			it('should return 400 if provided id does not exist', async function() {
				assert.strictEqual(response.statusCode, 400);
			});
			it('should respond 200 if successful', async function() {
				assert.strictEqual(response.statusCode, 200);
			});
		});
		describe('DELETE()', function() {
			it('should return 200 if successful', async function() {
				return assert.strictEqual(response.statusCode, 200);
			});
		});
	});
});