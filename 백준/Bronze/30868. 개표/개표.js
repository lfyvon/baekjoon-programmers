const [T, ...n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    const fives = Math.floor(n[i] / 5);
    const rest = n[i] % 5;
    const str = "++++ ".repeat(fives) + "|".repeat(rest);
    result.push(str);
}
console.log(result.join("\n"));