const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el, i) => [Number(el), i]);
const topFive = input.sort((a, b) => b[0] - a[0]).slice(0, 5).sort((a, b) => a[1] - b[1]);
console.log(topFive.reduce((a, b) => a + b[0], 0));
console.log(topFive.map(el => el[1] + 1).join(' '));