const [k, d, a] = require('fs').readFileSync('/dev/stdin').toString().trim().split('/').map(Number);
console.log(k + a < d || d === 0 ? "hasu" : "gosu");