const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const result = [0, 0];
let winner = "D";
for(let i = 0; i < A.length; i++){
    if(A[i] > B[i]){
        result[0] += 3;
        winner = "A";
    } 
    else if(A[i] < B[i]){
        result[1] += 3;
        winner = "B";
    } 
    else {
        result[0]++;
        result[1]++;
    }
}
console.log(result.join(" "));
if(result[0] > result[1]) winner = "A";
if(result[0] < result[1]) winner = "B";
console.log(winner);