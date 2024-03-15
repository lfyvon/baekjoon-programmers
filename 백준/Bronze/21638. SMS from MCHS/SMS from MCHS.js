const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [t1, v1] = input[0].split(" ").map(Number);
const [t2, v2] = input[1].split(" ").map(Number);
let result = "No message";
if(t2 < 0 && v2 >= 10) result = "A storm warning for tomorrow! Be careful and stay home if possible!";
else if(t1 > t2) result = "MCHS warns! Low temperature is expected tomorrow.";
else if(t1 <= t2 && v2 > v1) result = "MCHS warns! Strong wind is expected tomorrow.";
console.log(result);