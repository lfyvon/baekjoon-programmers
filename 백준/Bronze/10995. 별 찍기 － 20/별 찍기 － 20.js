const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const result = [];
for(let i = 0; i < n; i++){
    if(i % 2 === 1) result.push(" *".repeat(n));
    else result.push("* ".repeat(n).trim());
}
console.log(result.join("\n"));