const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const str = input[i].trim();
    result.push(Math.min(str.split("a").length, str.split("b").length) - 1);
}
console.log(result.join("\n"));