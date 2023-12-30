const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const len = input.length;
const del = "CAMBRIDGE";
let result = "";
for(let i = 0; i < len; i++){
    if(!del.includes(input[i])) result += input[i];
}
console.log(result);