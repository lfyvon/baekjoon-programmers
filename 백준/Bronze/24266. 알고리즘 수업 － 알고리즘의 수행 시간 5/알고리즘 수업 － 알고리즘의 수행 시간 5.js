const n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
let pow = (n * n * n).toString();
console.log(pow + '\n' + 3);