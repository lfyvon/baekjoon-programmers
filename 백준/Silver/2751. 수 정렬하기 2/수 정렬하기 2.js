let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = parseInt(input[0]);
let result = [];

for(let i = 1; i <= num; i++){
    result.push(input[i]);
}

result.sort(function(a, b) {
    return a - b;
    });
console.log(result.join('\n'));