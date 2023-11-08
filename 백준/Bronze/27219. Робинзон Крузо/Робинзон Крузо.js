const n = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log("V".repeat(n / 5) + "I".repeat(n % 5));