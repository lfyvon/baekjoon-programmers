const str = require('fs').readFileSync('/dev/stdin').toString().trim().split("DKSH");
console.log(str.length - 1);