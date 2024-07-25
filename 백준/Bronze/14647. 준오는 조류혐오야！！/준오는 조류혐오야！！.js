const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(" ").map(Number);
const bingo = input.map(el => el.trim().split(" "));
const row = new Array(n).fill(0);
const col = new Array(m).fill(0);
let totalCount = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        let count = bingo[i][j].split("").filter(el => el === "9").length;
        row[i] += count;
        col[j] += count;
        totalCount += count;
    }
}
console.log(totalCount - Math.max(Math.max(...row), Math.max(...col)));