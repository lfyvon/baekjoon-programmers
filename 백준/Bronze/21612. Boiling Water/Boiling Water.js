const B = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const P = 5 * B - 400;
console.log(P);
console.log(P === 100 ? 0 : P > 100 ? -1 : 1);