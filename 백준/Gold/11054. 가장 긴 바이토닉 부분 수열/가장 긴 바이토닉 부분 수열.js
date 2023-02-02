const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(' ').map(Number);
const ascDP = new Array(n).fill(1);
const decDP = new Array(n).fill(1);
const result = [];

for(let i = 1; i < n; i++){
    const cur = a[i];
    let count = 1;
    for(let j = 0; j < i; j++){
        const before = a[j];
        if(cur > before) count = Math.max(count, ascDP[j] + 1);
    }
    ascDP[i] = count;
}

for(let i = n - 1; i >= 0; i--){
    const cur = a[i];
    let count = 1;
    for(let j = i + 1; j < n; j++){
        const before = a[j];
        if(cur > before) count = Math.max(count, decDP[j] + 1);
    }
    decDP[i] = count;
}
for(let i = 0; i < n; i++){
    result.push(ascDP[i] + decDP[i] - 1);
}

console.log(Math.max(...result));