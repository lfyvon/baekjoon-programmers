const S = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
console.log(S.map((_, i) => i).join("\n"));