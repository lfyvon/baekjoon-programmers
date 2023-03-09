const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const [v, e] = input[i].split(' ').map(Number);
    result.push(e - v + 2);
}
console.log(result.join('\n'));