const [n, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let FB = F = B = 0;
for(let i = 1; i <= n; i++){
    if(i % a === 0 && i % b === 0) FB++;
    else if(i % a === 0) F++;
    else if(i % b === 0) B++;
}
console.log(`${F} ${B} ${FB}`);