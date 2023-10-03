const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.slice(0, 3) === "555" ? "YES" : "NO");