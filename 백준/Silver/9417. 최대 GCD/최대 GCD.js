const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
for(let i = 1; i <= N; i++){
    const M = input[i].split(" ").map(Number).sort((a, b) => b - a);
    let max = 1;

    for(let j = 0; j < M.length; j++){
        for(let k = j + 1; k < M.length; k++){
            max = Math.max(max, gcd(M[j], M[k]));
        }
    }
    result.push(max);
}
console.log(result.join("\n"));
