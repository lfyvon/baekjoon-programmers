const [G, L] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let F = G * 50 - L * 10;
if(G > L) F += 500;
console.log(F);