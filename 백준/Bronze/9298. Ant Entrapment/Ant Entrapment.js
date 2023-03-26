const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const n = input.length;
let j = 1;
const result = [];
for(let i = 1; i < n; i++){
    const num = Number(input[i]);
    const arr = input.slice(i + 1, i + num + 1).map(el => el.split(' ').map(Number));
    const x = arr.map(el => el[0]);
    const y = arr.map(el => el[1]);
    const h = Math.max(...y) - Math.min(...y);
    const w = Math.max(...x) - Math.min(...x);
    result.push(`Case ${j}: Area ${h * w}, Perimeter ${2 * (h + w)}`)
    i += num;
    j++;
}
console.log(result.join('\n'));