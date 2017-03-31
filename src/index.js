import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
	all: starWarsNames,
	random: random,
}


/**
 * getting array of starwars character
 * 
 * @param {any} number
 * @returns {array} array of starwars names
 */
function random(number) {
	if (number === undefined) {
		return getRandomItem();
	}
	else {
		var randomItems = [];

		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem());
		}
		
		return randomItems;
	}
}