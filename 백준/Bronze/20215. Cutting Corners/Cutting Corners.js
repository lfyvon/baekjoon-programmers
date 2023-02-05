const [w, h] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(w + h - Math.sqrt(w ** 2 + h ** 2));