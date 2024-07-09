const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
let S = input[1];
let result = S.slice(K - 1);
if(N % 2 === K % 2){
    result += S.slice(0, K - 1).split("").reverse().join("");
} else {
    result += S.slice(0, K - 1); 
}
console.log(result);