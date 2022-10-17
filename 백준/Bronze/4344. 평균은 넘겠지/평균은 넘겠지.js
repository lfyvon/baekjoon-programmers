const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let c = parseInt(input[0]);
let result = [];
for(let i = 1; i <= c; i++){
    let n = input[i].split(' ').map(el => parseInt(el));
    let sum = 0;
    for(let j = 1; j <= n[0]; j++){
        sum += n[j];
    }
    let avg = sum / n[0];
    let count = 0;
    for(let j = 1; j <= n[0]; j++){
        if(n[j] > avg) count++;
    }
    result.push((count / n[0] * 100).toFixed(3) + '%');
}

console.log(result.join('\n'));