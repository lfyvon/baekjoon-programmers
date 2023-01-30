const r = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(r ** 2 * Math.PI);
console.log(r ** 2 * 2);