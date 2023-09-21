const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let result = 0;
const money = {
    136 : 1000,
    142 : 5000,
    148 : 10000,
    154 : 50000,
}
for(let i = 1; i <= n; i++){
    const [w, _] = input[i].split(" ").map(Number);
    result += money[w];
}
console.log(result);