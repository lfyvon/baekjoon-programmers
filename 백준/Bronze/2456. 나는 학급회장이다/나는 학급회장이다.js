const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const stdNum = 3;
const std = Array.from(new Array(stdNum), () => new Array(2).fill(0));
for(let i = 1; i <= N; i++){
    const score = input[i].split(" ").map(Number);
    for(let j = 0; j < stdNum; j++){
        std[j][0] += score[j];
        std[j][1] += score[j] ** 2;
    }
}
const max = Math.max(...std.map(el => el[1]));
const maxIdx = [...std.map(el => el[1])].indexOf(max);
let count = std.filter(el => el[1] === max).length;
console.log(`${count > 1 ? 0 : maxIdx + 1} ${std[maxIdx][0]}`);