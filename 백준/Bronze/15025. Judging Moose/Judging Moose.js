const [l, r] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(!l && !r ? "Not a moose" : l === r ? "Even " + l * 2 : "Odd " + Math.max(l, r) * 2);