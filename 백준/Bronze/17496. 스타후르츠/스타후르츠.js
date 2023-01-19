const [n, t, c, p] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
let num = n % t === 0 ? parseInt(n / t) - 1 : parseInt(n / t);
console.log((num * c * p));