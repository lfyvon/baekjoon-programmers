const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 1; i < input.length; i++){
    if(input[i] === 999) break;
    result.push((input[i] - input[i - 1]).toFixed(2));
}
console.log(result.join("\n"));
