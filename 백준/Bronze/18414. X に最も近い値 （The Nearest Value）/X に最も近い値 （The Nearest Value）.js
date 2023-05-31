const [x, l, r] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = Infinity;
for(let i = l; i <= r; i++){
    if(Math.abs(x - i) < Math.abs(x - result)) result = i;
}
console.log(result);