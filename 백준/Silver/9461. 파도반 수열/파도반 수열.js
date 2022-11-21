const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => parseInt(el));

const t = input[0]
const seq = input.slice(1);
const result = [];

for(let i = 0; i < t; i++){
    const n = seq[i];
    const p = new Array(n + 1).fill(0);

    p[1] = 1
    p[2] = 1
    p[3] = 1

    for(let j = 4; j <= n; j++){
        p[j] = p[j - 3] + p[j - 2];
    }
    result.push(p[n]);
}

console.log(result.join('\n'));