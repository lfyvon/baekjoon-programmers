const a = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(100 / a);
console.log(100 / (100 - a));