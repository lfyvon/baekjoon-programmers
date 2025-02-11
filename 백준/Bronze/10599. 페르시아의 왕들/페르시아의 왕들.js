const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(input[i] !== "0 0 0 0"){
    const [a, b, c, d] = input[i++].split(" ").map(Number);
    result.push(`${c - b} ${d - a}`);
}
console.log(result.join("\n"));