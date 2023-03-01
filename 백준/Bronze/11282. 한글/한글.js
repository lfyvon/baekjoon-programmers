const N = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(String.fromCharCode(N + 44031));