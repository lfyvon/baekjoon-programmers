const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let min = Infinity;
for(let i = 1; i <= N; i++){
    const [A, B] = input[i].split(" ").map(Number);
    if(B >= A) min = Math.min(min, B);
}
console.log(min === Infinity ? - 1 : min);