const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let result = [0, Infinity];
for(let i = 1; i <= N; i++){
    const [A, B] = input[i].split(" ").map(Number);
    if(result[1] - result[0] > B - A){
        result = [A, B];
    } 
}
console.log(result[1]);