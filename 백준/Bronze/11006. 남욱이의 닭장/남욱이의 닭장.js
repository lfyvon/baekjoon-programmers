const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [N, M] = input[i].split(" ").map(Number);
    const U = M * 2 - N;
    result.push(`${U} ${M - U}`);
}
console.log(result.join("\n"));