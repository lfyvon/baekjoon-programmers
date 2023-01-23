const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for(let i = 0; i < input.length; i++){
    let [a, b, c] = input[i].split(' ').map(Number);
    result.push(Math.max(c - b, b - a) - 1);
}
console.log(result.join('\n'))