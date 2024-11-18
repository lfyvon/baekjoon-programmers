const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let result = "";
for(let i = 1; i <= n; i++){
    let [a, b, v] = input[i].split(" ").map(Number);
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    for(let j = 0; j < v; j++){
        max = Math.floor(max / 2);
        [max, min] = [Math.max(max, min), Math.min(max, min)];
    }
    result += `Data set: ${input[i]}\n`;
    result += `${max} ${min}\n\n`;
}
console.log(result.trim());