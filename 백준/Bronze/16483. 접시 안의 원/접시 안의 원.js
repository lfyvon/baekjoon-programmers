const t = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(Math.round((t / 2) ** 2));