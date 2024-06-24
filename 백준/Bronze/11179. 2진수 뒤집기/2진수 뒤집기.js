const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim()).toString(2).split("").reverse().join("");
console.log(parseInt(N, 2));