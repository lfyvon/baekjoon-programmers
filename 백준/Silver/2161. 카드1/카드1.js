const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const num = parseInt(input);
let cards = Array(num).fill().map((el, i) => i+1);
let result = [];

while(cards.length > 1){    
    result.push(cards.shift());
    cards.push(cards.shift());
}
result.push(cards[0]);
console.log(result.join(' '));