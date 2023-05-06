const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const score = input[i].split(' ').map(Number).sort((a, b) => a - b).slice(1, 4);
    const total = score[2] - score[0] >= 4 ? "KIN" : score.reduce((a, b) => a + b);
    result.push(total);
}
console.log(result.join('\n'));