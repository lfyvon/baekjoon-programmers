const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
let idx = 0;
const result = [];
for(let i = 0; i < 3; i++){
    const N = Number(input[idx++]);
    let sum = 0n;
    for(let j = idx; j < idx + N; j++){
        sum += input[j];
    }
    idx += N;
    result.push(sum > 0n ? "+" : sum < 0n ? "-" : 0);
}
console.log(result.join("\n"));