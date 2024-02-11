const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const student = input.map(el => el.split(" ").map(Number));
let count = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (i === j) continue;
        for (let k = 0; k < 5; k++) {
            if (student[i][k] === student[j][k]) {
                count[i]++;
                break;
            }
        }
    }
}

console.log(count.indexOf(Math.max(...count)) + 1);