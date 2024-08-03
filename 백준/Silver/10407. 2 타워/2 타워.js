const H = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(H === 1 ? 2 : 1);