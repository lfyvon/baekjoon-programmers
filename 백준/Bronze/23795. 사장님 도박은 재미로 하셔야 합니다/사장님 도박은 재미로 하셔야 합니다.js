const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = 0;
let i = 0;
while(input[i] !== -1){
    result += input[i++];
}
console.log(result)