const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const score = input.slice(1).map(el => el.split(" ").map(Number));
const result = [];
for(let i = 1; i <= 4; i++){
    score.sort((a, b) => b[i] - a[i] || a[0] - b[0]);
    result.push(score[0][0]);
    score[0] = [score[0][0], -1, -1, -1, -1];

}
console.log(result.join(" "));