const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const p = input[0];
const result = [];
for(let i = 1; i <= p; i++){
    let sum = 0;
    for(let j = 1; j <= input[i]; j++){
        sum += j ** 2;
    }
    result.push(sum);
}
console.log(result.join('\n'));