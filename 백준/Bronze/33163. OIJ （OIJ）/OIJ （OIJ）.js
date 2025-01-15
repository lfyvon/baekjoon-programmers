const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const S = input[1].split("");
const str = { 
    J : "O",
    O : "I",
    I : "J"
}
console.log(S.map(el => str[el]).join(""));