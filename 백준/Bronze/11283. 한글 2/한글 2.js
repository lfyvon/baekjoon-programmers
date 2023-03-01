const c = require('fs').readFileSync('/dev/stdin').toString();
console.log(c.charCodeAt() - 44031);