const input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input.length + 2 + (input.split("_").length - 1) * 5);