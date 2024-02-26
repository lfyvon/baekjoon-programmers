const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
let result = "N";
if(A === B || B === C || C === A) result = "S";
else if(A + B === C) result = "S";
console.log(result);