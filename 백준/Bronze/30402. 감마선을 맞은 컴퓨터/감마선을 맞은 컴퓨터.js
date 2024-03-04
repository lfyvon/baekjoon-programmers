const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.includes('w') ? "chunbae" : input.includes('b') ? "nabi" : "yeongcheol");