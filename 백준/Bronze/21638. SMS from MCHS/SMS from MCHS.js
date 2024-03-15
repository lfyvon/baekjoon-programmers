const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [t1, v1] = input[0].split(" ").map(Number);
const [t2, v2] = input[1].split(" ").map(Number);
if(t2 < 0 && v2 >= 10) console.log("A storm warning for tomorrow! Be careful and stay home if possible!");
else if(t1 > t2) console.log("MCHS warns! Low temperature is expected tomorrow.");
else if(t1 <= t2 && v2 > v1) console.log("MCHS warns! Strong wind is expected tomorrow.");
else console.log("No message");