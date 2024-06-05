const input = require('fs').readFileSync('/dev/stdin').toString().split('');
let result = input[0];
for(let i = 1; i < input.length; i++){
    if(result[result.length - 1] !== input[i]) result += input[i];
}
console.log(result);