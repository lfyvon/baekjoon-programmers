const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    result.push((N[i] + 1) % (N[i] % 100) === 0 ? "Good" : "Bye");
}
console.log(result.join("\n"));