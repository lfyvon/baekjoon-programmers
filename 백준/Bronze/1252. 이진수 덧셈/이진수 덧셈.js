const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => el.split("").map(Number).reverse()).sort((a, b) => b.length - a.length);
const minLen = B.length;
const maxLen = A.length;
let share = 0;
for(let i = 0; i < minLen; i++){
    if(A[i] + B[i] + share> 1){
        A[i] = (A[i] + B[i] + share) % 2;
        share = 1;
    } else{
        A[i] += B[i] + share;
        share = 0;
    }
}
for(let i = minLen; i < maxLen; i++){
    if(A[i] + share > 1){
        A[i] = 0;
        share = 1;
    } else{
        A[i] += share;
        share = 0;
    }
}

if(share) A.push(1);
const bin =  A.reverse().join("");
console.log(A.every(el => !el) ? 0 : bin.slice(bin.indexOf("1")));