const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const score = input[i].split(' ').map(Number).sort((a, b) => a - b);
    const total = score[3] - score[1] >= 4 ? "KIN" : score[1] + score[2] + score[3];
    result.push(total);
}
console.log(result.join('\n'));