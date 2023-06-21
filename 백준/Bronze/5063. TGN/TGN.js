const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const result = [];
for(let i = 1; i <= n; i++){
    const [r, e, c] = input[i].split(" ").map(Number);
    e - c > r ? result.push("advertise") : e - c === r ? result.push("does not matter") : result.push("do not advertise");
}
console.log(result.join("\n"));