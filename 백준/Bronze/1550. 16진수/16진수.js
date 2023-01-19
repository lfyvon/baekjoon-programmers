const hex = require('fs').readFileSync('/dev/stdin').toString();
console.log(parseInt(hex, 16));