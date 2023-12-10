const bowl = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = bowl.length;
let result = 10;

for(let i = 1; i < N; i++){
    bowl[i] === bowl[i - 1] ? result += 5 : result += 10;
}
console.log(result);