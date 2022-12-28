const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");

let [h, m, s] = input[0].split(' ').map(Number);
const d = parseInt(input[1]);

s += d;
m += Math.floor(s / 60);
h += Math.floor(m / 60);
s %= 60;
m %= 60;
h %= 24;

console.log(h + ' ' + m + ' ' + s);