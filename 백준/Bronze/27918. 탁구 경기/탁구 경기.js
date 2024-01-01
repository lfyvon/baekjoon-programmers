const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const N = Number(input[0]);
const result = [0, 0];
for(let i = 1; i <= N; i++){
    if(input[i] === "D"){
        result[0]++;
    } else result[1]++;
    if(Math.abs(result[0] - result[1]) >= 2) break;
}
console.log(result.join(":"));