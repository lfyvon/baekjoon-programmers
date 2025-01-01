const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = 0;
const F = input[0].split(" ").map(Number);
const S = input[1].split(" ").map(Number);
const sum = F[0] + F[1] + S[0] + S[1];
for(let i = 0; i < sum - 1; i++){
    if(result === 4){
        result = 1;
        continue;
    }
    result++;
}
console.log(result);