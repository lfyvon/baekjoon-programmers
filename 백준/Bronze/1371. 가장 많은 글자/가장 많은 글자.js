const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const len = input.length;
const alphaLen = 26;
const alpha = new Array(alphaLen).fill(0);
let result = "";
for(let i = 0; i < len; i++){
    const str = input[i].trim().split(" ").join("");
    const strLen = str.length;
    for(let j = 0; j < strLen; j++){
        alpha[str[j].charCodeAt() - 97]++;
    }
}
const max = Math.max(...alpha);

for(let i = 0; i < alphaLen; i++){
    if(alpha[i] === max) result += String.fromCharCode(i + 97);
}
console.log(result);