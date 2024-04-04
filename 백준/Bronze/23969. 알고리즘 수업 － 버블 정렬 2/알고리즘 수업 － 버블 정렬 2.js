const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let count = 1;
const bubbleSort = (arr) => {
    for(let i = N; i > 1; i--){
        for(let j = 0; j < i; j++){
            if(A[j] > A[j + 1]){
                [A[j], A[j + 1]] = [A[j + 1], A[j]];
                if(count === K) return arr.join(" ");
                count++;
            }
        }
    }
    return -1;
}
console.log(bubbleSort(A));