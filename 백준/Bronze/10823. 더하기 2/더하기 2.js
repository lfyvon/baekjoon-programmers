const sum = require('fs').readFileSync('/dev/stdin').toString().trim().replace(/\n|\r/g, '').split(",").reduce((a, b) => a + (Number(b) || 0), 0);
console.log(sum);