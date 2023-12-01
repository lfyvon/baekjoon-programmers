const [X, Y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;
if(X === Y) result = -1;
else{
    const target = Math.floor(Y * 100 / X ) + 1;
    if(target === 100) result = -1;
    else result = Math.ceil((X * target - Y * 100) / (100 - target));
}
console.log(result);