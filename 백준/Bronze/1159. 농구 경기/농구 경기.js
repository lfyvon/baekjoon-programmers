const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const char = new Array(26).fill(0);
const N = Number(input[0]);
let result = "";
for(let i = 1; i <= N; i++){
    char[input[i].charCodeAt(0) - 97]++;
}
for(let i = 0; i < 26; i++){
    if(char[i] >= 5) result += String.fromCharCode(i + 97);
}
console.log(result ? result : "PREDAJA");