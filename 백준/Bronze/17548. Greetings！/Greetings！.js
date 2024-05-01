const str = require('fs').readFileSync('/dev/stdin').toString().trim();
const len = str.length;
console.log(str[0] + str.slice(1, len - 1).repeat(2) + str[len - 1]);