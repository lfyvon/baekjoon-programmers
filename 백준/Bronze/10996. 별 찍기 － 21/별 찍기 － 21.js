const N = Number(require('fs').readFileSync('/dev/stdin').toString());
const result = [];
for(let i = 0; i < N; i++){
    result.push("* ".repeat(Math.ceil(N / 2)));
    result.push(" *".repeat(Math.floor(N / 2)));
}
console.log(result.join("\n").trim());