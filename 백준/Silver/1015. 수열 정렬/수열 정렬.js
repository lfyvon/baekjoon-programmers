const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const sortedA = A.slice().sort((a, b) => a - b);
const P = [];
A.forEach(el => {
    const idx = sortedA.indexOf(el);
    P.push(idx);
    sortedA[idx] = -1;
});
console.log(P.join(" "));