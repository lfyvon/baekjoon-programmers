const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const str = input[i].trim();
    const mid = str.length / 2;
    result.push(str[mid - 1] === str[mid] ? "Do-it" : "Do-it-Not");
}
console.log(result.join("\n"));