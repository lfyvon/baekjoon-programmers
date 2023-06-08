const [m, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let sum = 0;
let min = -1;
for(let i = n; i >= m; i--){
    if(Number.isInteger(Math.sqrt(i))){
        sum += i;
        min = i;
    }
}
if(min > - 1) console.log(sum);
console.log(min);