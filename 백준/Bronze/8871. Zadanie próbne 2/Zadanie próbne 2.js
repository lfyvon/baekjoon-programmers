const N = parseInt(require('fs').readFileSync('/dev/stdin').toString()) + 1;
console.log(N * 2 + " " + N * 3);