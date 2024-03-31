const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const ACount = input.split("A").length - 1;
const BCount = input.split("B").length - 1;
console.log(ACount + " : "  + BCount);