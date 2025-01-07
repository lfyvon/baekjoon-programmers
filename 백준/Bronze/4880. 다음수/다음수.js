const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(input[i] !== "0 0 0"){
    const [a, b, c] = input[i++].split(" ").map(Number);
    result.push(c - b === b - a ? `AP ${c + b - a}` : `GP ${c * b / a}`);
}
console.log(result.join("\n"));