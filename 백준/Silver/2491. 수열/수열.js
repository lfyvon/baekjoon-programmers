const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const dpAsc = new Array(N).fill(1);
const dpDesc = new Array(N).fill(1);

for(let i = 1; i < N; i++){
    if(A[i] >= A[i - 1]) {
        dpAsc[i] = dpAsc[i - 1] + 1;
    }
}

for(let i = 1; i < N; i++){
    if(A[i] <= A[i - 1]) {
        dpDesc[i] = dpDesc[i - 1] + 1;
    }
}
console.log(Math.max(...dpAsc, ...dpDesc));