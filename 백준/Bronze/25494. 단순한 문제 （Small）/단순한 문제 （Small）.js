const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    result.push(Math.min(...input[i].split(' ').map(Number)));
}
console.log(result.join('\n'));