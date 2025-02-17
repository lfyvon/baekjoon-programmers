const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = input[0];
const result = [];
for(let i = 1; i <= T; i++){
    const [N, C] = input[i].split(" ").map(Number);
    result.push(Math.ceil(N / C));
}
console.log(result.join("\n"));