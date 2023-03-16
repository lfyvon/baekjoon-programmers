const s = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(s === s.split('').reverse().join('') ? 1 : 0);