const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const z = Number(input[0]);
const result = [];
for(let i = 1; i <= z; i++){
    const [w, k] = input[i].split(" ").map(Number);
    result.push(Math.floor(w * k / 2));
}
console.log(result.join("\n"));