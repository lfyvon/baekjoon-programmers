const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    let last = 1;
    for(let j = 2; j <= N[i]; j++){
        last = last * j % 10;
    }
    result.push(last);
}
console.log(result.join("\n"));