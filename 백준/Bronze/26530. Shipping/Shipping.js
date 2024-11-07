const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let idx = 1;
const result = [];
for(let i = 1; i <= T; i++){
    const N = Number(input[idx++]);
    let sum = 0;
    for(let j = idx; j < idx + N; j++){
        const [u, q, p] = input[j].split(" ");
        sum += +q * +p;
    }
    result.push(`$${sum.toFixed(2)}`);
    idx += N;
}
console.log(result.join("\n"));