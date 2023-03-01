const N = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const result = [];

for(let i = 1; i <= N; i++){
    result.push(" ".repeat(N - i) + "*".repeat(i));
}

for(let i = N - 1; i > 0; i--){
    result.push(" ".repeat(N - i) + "*".repeat(i));
}

console.log(result.join("\n"));