const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = 0;
const mergeSort = (A, p, r) => {
    if(p < r){
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

const merge = (A, p, q, r) => {
    let i = p;
    let j = q + 1;
    let t = 0;
    let temp = [];
    while(i <= q && j <= r){
        if(A[i] <= A[j]){
            temp[t++] = A[i++];
        } else{
            temp[t++] = A[j++];
        }
    }
    while(i <= q) temp[t++] = A[i++];
    while(j <= r) temp[t++] = A[j++];

    i = p; t = 0;
    while (i <= r) {
        K--;
        if (K === 0) {
            result = temp[t];
        }
        A[i++] = temp[t++];
    }
}
mergeSort(arr, 0, N - 1)

console.log(K > 0 ? - 1 : result);