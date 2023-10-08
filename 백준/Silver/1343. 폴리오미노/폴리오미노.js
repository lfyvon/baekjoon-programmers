const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const result = input.replaceAll("XXXX", "AAAA").replaceAll("XX", "BB");
console.log(result.indexOf("X") === -1 ? result : -1);