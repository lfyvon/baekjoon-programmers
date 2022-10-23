const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

let result = input.reduce((acc, cur) =>{
    if(cur < 40) cur = 40;
    return acc + cur;
}, 0);

console.log(result / 5);