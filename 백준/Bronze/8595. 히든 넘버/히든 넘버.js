const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const word = input[1];
let num = '';
let result = 0n;
for(let i = 0; i < n; i++){
    if(word[i].charCodeAt() >= 45 && word[i].charCodeAt() <= 57){
        num += word[i];
    } else{
        result += BigInt(num);
        num = '';
    }
}
result += BigInt(num);
console.log(result.toString());