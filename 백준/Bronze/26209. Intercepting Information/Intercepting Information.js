const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.includes("9") ? "F" : "S");