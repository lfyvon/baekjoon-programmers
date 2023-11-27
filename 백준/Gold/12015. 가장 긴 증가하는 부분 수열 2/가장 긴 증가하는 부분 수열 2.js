const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const lis = new Array(N);
const binarySearch = (left, right, target) => {
    while(left < right){
        const mid = Math.floor((left + right) / 2);

        if(lis[mid] < target){
            left = mid + 1;
        } else{
            right = mid;
        }
    }
    return right;
}

let len = 0;
lis[0] = A[0];

for(let i = 1; i < N; i++){
    if(lis[len] < A[i]){
        lis[++len] = A[i];
    } else{
        const idx = binarySearch(0, len, A[i]);
        lis[idx] = A[i];
    }
}

console.log(len + 1);