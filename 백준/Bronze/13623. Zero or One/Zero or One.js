const [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let result = "";
if(A === B && B === C) result = "*";
else if(A === B) result = "C";
else if(B === C) result = "A";
else result = "B";
console.log(result);