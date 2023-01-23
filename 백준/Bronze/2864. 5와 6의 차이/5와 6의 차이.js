const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let min = Number(a.replaceAll(6, 5)) + Number(b.replaceAll(6, 5));
let max = Number(a.replaceAll(5, 6)) + Number(b.replaceAll(5, 6));
console.log(min + " " + max);