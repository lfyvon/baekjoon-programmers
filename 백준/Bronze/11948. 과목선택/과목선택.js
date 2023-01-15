const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let sub1 = input.slice(0, 4).sort((a, b) => b - a);
sub1.pop();
sub1 = sub1.reduce((a, b) => a + b, 0);
let sub2 = input.slice(4,).sort((a, b) => b - a)[0];
console.log(sub1 + sub2);