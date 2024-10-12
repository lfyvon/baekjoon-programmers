const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [A, B] = input[i].split(" ");
    result.push((Math.abs(A - B)).toFixed(1));
}
console.log(result.join("\n"));