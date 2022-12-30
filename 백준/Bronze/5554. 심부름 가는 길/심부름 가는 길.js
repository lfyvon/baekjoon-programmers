const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number).reduce((a, b) => a + b, 0);
let m = Math.floor(input / 60);
let s = input % 60;
console.log(m + '\n' + s);