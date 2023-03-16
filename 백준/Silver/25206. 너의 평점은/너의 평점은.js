const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const score = new Map([
    ['A+', 4.5], ['A0', 4.0],
    ['B+', 3.5], ['B0', 3.0], 
    ['C+', 2.5], ['C0', 2.0],
    ['D+', 1.5], ['D0', 1.0],
    ['F', 0]]);
let sum = 0;
let totalScore = 0;
for(let i = 0; i < 20; i++){
    const [s, c, g] = input[i].trim().split(' ');
    if(g === 'P') continue;
    sum += Number(c) * score.get(g);
    totalScore += Number(c);
}
console.log(sum / totalScore);