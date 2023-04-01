const n = Number(require('fs').readFileSync('/dev/stdin').toString());
console.log(new Array(n).fill('SciComLove').join('\n'));