const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(" ").map(Number);
let A = input[1].split(",").map(Number);
let i = 0;
while(i < K){
    N--;
    let B = new Array(N).fill(0);
    for(let x = 0; x < N; x++){
        B[x] = A[x + 1] - A[x];
    }
    A = B;
    i++;
}
console.log(A.join(","));