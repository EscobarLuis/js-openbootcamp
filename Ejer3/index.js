const for_fact = require('./factorial-for.js');
const while_fact = require('./factorial-while.js');
const break_fact = require('./factorial-break.js');

console.log(`El factorial de 10 es con FOR: `+ for_fact.factorial());

console.log(`El factorial de 10 es con WHILE: `+ while_fact.factorial());

console.log(`El factorial de 10 es con BREAK: `+ break_fact.factorial());