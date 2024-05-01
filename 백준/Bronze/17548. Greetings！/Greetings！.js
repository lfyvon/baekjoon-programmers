const str = require('fs').readFileSync('/dev/stdin').toString().trim();
const len = str.length;
console.log(str[0] + "e".repeat((len - 2) * 2) + str[len - 1]);