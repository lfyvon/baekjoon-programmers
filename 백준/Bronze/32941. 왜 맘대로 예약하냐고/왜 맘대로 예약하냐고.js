const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [T, X] = input[0].split(" ").map(Number);
const N = Number(input[1]);
let result = "YES";
for(let i = 2; i < N * 2 + 2; i += 2){
    const K = Number(input[i]);
    const A = input[i + 1].split(" ").map(Number);
    if(!A.includes(X)) result = "NO";
}
console.log(result);