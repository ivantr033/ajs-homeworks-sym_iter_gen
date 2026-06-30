import './css/style.css';

import Character from './js/Character.js';
import TeamIterator from './js/TeamIterator.js';
import TeamGenerator from './js/TeamGenerator.js';
import canIterate from './js/canIterate.js';

// Creating personages for tests
const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 1, 25, 25);

// Testing Iterator
const teamWithIterator = new TeamIterator();
teamWithIterator.add(bowman);
teamWithIterator.add(swordsman);

console.log('--- Testing Team with Iterator ---');
for (const char of teamWithIterator) {
    console.log(char);
}

// Testing Generator
const teamWithGenerator = new TeamGenerator();
teamWithGenerator.add(bowman);
teamWithGenerator.add(swordsman);

console.log('--- Testing Team with Generator ---');
for (const char of teamWithGenerator) {
    console.log(char);
}

// Testing canIterate
console.log('--- Testing if canIterate ---');
console.log(canIterate(new Map()));       // true
console.log(canIterate(new Set()));       // true
console.log(canIterate(null));            // false
console.log(canIterate(10));              // false
console.log(canIterate('Netology'));      // true