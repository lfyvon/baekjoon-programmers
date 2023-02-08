const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, w, h] = input[0].split(' ').map(Number);
const match = input.slice(1).map(Number);
const len = Math.sqrt(w ** 2 + h ** 2);
const result = [];
for(let x of match){
    result.push(x <= len ? 'DA' : 'NE');
}
console.log(result.join('\n'));