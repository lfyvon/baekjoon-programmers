const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const L = Number(input[0]);
const result = [];

for(let i = 1; i <= L; i++){
    const [N, x] = input[i].trim().split(" ");
    result.push(x.repeat(+N));
}
console.log(result.join("\n"));