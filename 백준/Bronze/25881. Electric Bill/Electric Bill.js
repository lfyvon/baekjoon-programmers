const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);
const N = Number(input[1]);
let result = [];
for(let i = 2; i <= N + 1; i++){
    const num = Number(input[i]);
    let c = (num  > 1000 ? 1000 * A + (num - 1000) * B : num * A);
    result.push(num + " " + c);
}
console.log(result.join("\n"));