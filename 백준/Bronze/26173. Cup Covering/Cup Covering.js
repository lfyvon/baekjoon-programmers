const a = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(Math.sqrt(a / Math.PI) * 2);