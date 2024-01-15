const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
let i = 0;

while(input[i]){
    const n = input[i];
    result.push((1 + n + n ** 2 + n ** 3 + n ** 4).toFixed(2));
    i++;
}
console.log(result.join("\n"));