const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a, b) => a - b);
if(a + b === c) console.log(1);
else if(a * b === c) console.log(2);
else console.log(3);
