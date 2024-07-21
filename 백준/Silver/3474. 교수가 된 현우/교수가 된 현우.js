const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    let count = 0;
    for(let j = 5; j <= N[i]; j *= 5){
        count += Math.floor(N[i] / j);
    }
    result.push(count);
}
console.log(result.join("\n"));