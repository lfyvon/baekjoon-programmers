const [t, s] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(s === 1 ? 280 : t >= 12 && t <= 16 ? 320 : 280);