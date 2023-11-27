const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const lis = [];
const binarySearch = (left, right, target) => {
    while(left < right){
        const mid = (left + right) >> 1;
        lis[mid] < target ? left = mid + 1 : right = mid;
    }
    return right;
}

lis.push(A[0]);

for(let i = 1; i < N; i++){
    if(lis[lis.length - 1] < A[i]){
        lis.push(A[i]);
    } else{
        const idx = binarySearch(0, lis.length - 1, A[i]);
        lis[idx] = A[i];
    }
}

console.log(lis.length);