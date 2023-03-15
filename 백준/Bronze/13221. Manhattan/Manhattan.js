const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [px, py] = input[0].split(' ').map(Number);
const n = Number(input[1]);
const taxi = input.slice(2);
let result = taxi[0].split(' ').map(Number);
for(let i = 1; i < n; i++){
    const [x, y] = taxi[i].split(' ').map(Number);
    if(Math.abs(px - x) + Math.abs(py - y) < Math.abs(px - result[0]) + Math.abs(py - result[1])){
        result = [x, y];
    }
}
console.log(result.join(' '));