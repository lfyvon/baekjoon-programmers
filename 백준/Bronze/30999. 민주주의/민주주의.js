const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);
let result = 0;
for(let i = 1; i <= N; i++){
    if(input[i].split("O").length - 1 > M / 2) result++;
}
console.log(result);