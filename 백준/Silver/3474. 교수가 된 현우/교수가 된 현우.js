const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    let m = 5;
    let count = 0;
    while(m <= N[i]){
        count += Math.floor(N[i] / m);
        m *= 5;
    }
    result.push(count);
}
console.log(result.join("\n"));