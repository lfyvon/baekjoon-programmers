const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [a1, p1] = input[0];
const [r1, p2] = input[1];
console.log(p1 / a1 >  p2 / (r1 ** 2 * Math.PI) ? 'Whole pizza' : 'Slice of pizza');