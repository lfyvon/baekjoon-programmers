const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];
const n = Number(input[0]);
const arr = input.slice(1).map(el => el.split(' ').map(Number));
for(let i = 0; i < n; i++){
    const [a1, p1] = arr[i * 2];
    const [r1, p2] = arr[(i * 2) + 1];
    result.push(p1 / a1 >  p2 / (r1 ** 2 * Math.PI) ? 'Whole pizza' : 'Slice of pizza');
}
console.log(result.join('\n'));