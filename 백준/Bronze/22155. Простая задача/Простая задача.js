const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
   const [a, b] = input[i].split(" ").map(Number);
   result.push((a <= 2 && b <= 1) || (b <= 2 && a <= 1) ? "Yes" : "No");
}
console.log(result.join("\n"));