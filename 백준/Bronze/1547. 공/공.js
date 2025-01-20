const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const m = Number(input[0]);
const cups = [0, 1, 2, 3];
for(let i = 1; i <= m; i++){
    const [x, y] = input[i].split(" ").map(Number);
    const [xIdx, yIdx] = [cups.indexOf(x), cups.indexOf(y)];
    [cups[xIdx], cups[yIdx]] = [cups[yIdx], cups[xIdx]];
}
console.log(cups[1]);