const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(`The largest square has side length ${Math.floor(Math.sqrt(N))}.`);