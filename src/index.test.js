const expect = require('chai').expect;
const starWars = require('./index.js');

describe('starwars-names', function() {
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(starWars.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			}
		});

		it('should contain `Wannabe`', function() {
			expect(starWars.all).to.include('Wannabe');
		});
	});

	describe('random', function() {
		it('should return a random name from starWars.all', function() {
			var randomItem = starWars.random();

			expect(starWars.all).to.include(randomItem);
		})
	})
});