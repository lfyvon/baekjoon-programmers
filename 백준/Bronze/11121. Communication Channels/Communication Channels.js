const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [a, b] = input[i].split(" ");
    result.push(a === b ? "OK" : "ERROR");
}
console.log(result.join("\n"));