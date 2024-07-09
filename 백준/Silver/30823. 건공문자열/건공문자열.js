const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input[0].split(" ").map(Number);
let S = input[1];
let result = S.slice(K - 1);
if(N % 2 === 1){
    if(K % 2 === 0){
        result += S.slice(0, K - 1);  
    } else{
        result += S.slice(0, K - 1).split("").reverse().join("");
    }
} else{
    if(K % 2 === 1){
        result += S.slice(0, K - 1);  
    } else{
        result += S.slice(0, K - 1).split("").reverse().join("");
    }
}
console.log(result);