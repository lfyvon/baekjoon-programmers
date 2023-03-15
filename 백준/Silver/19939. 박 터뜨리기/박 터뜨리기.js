const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
const sum = k * (k + 1) / 2;
let result = 0;
if(sum > n) result = -1;
else if((n - sum) % k === 0) result = k - 1;
else result = k;
console.log(result);