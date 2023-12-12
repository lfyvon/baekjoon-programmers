const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const dp = new Array(N).fill(0);
const lis = [];
let result = [];

const binarySearch = (left, right, target) => {
    while(left < right){
        const mid = (left + right) >> 1;
        lis[mid] < target ? left = mid + 1 : right = mid;
    }
    return right;
}
let j = 0;
lis.push(A[0]);
for(let i = 1; i < N; i++){
    if(lis[j] < A[i]){
        lis[++j] = A[i];
        dp[i] = j;
    } else{
        const idx = binarySearch(0, j, A[i]);
        lis[idx] = A[i];
        dp[i] = idx;
    }
}
let max = Math.max(...dp);
console.log(max + 1);
for(let i = N - 1; i >= 0; i--){
    if(dp[i] === max){
        result.push(A[i]);
        max--;
    }
}
console.log(result.reverse().join(" "));