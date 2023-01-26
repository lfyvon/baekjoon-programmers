const j = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(Math.floor((j - 1) * (j - 2) * (j - 3) / 6).toString());