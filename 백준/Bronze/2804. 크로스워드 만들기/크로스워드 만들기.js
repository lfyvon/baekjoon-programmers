const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = A.length;
const M = B.length;
let result = "";
let indexA = 0;
let indexB = 0;

for(let i = 0; i < N; i++){
    let check = 0;
    for(let j = 0; j < M; j++){
        if(A[i] === B[j]){
            indexA = i;
            indexB = j;
            check = 1;
            break;
        }
    }
    if(check) break;
}


for(let i = 0; i < M; i++){
    for(let j = 0; j < N; j++){
        if(i === indexB) result += A[j];
        else if(j === indexA) result += B[i];
        else result += ".";
    }
    result += "\n";
}
console.log(result.trim());