const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = [];
let i = 0;
while(input[i] !== 0){
    result.push((input[i] + 1) * input[i] / 2);
    i++;
}
console.log(result.join('\n'));