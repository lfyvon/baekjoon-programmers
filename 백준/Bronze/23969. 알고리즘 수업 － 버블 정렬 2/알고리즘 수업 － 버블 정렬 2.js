const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const bubbleSort = (arr) => {
    let count = 1;
    for(let i = N; i > 1; i--){
        for(let j = 0; j < i; j++){
            if(A[j] > A[j + 1]){
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
                if(count++ === K) return arr.join(" ");
            }
        }
    }
    return -1;
}
console.log(bubbleSort(A));