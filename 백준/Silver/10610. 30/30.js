const N = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
const sum = N.reduce((a, b) => a + b, 0);
let result = -1;
if(N.includes(0) && sum % 3 === 0){
    result = N.sort((a, b) => b - a).join('');
}
console.log(result);