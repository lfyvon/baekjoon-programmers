const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const A = new Set(input[1]);
const B = new Set(input[2]);
const dif1 = [...A].filter(el => !B.has(el));
const dif2 = [...B].filter(el => !A.has(el));
console.log(dif1.length + dif2.length);