const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
let k = 1;
const result = [];
for(let i = 0; i < t; i++){
    let count = 0;
    const [x1, y1, x2, y2] = input[k].split(' ').map(Number);
    k++;
    const n = Number(input[k]);
    k++;
    for(let j = 0; j < n; j++){
        const [cx, cy, r] = input[k].split(' ').map(Number);
        k++;
        if ((x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2 && (x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2) continue;
        if ((x1 - cx) ** 2 + (y1 - cy) ** 2 < r ** 2 || (x2 - cx) ** 2 + (y2 - cy) ** 2 < r ** 2) count++;
    }
    result.push(count);
}
console.log(result.join('\n'));