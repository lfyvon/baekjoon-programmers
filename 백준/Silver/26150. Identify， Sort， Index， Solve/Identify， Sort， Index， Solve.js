const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const puzzleList = input.slice(1).map(el => el.trim().split(" ")).sort((a, b) => +a[1] - +b[1]);
let result = "";
for(let i = 0; i < N; i++){
    const [S, I, D] = puzzleList[i];
    result += S[D - 1].toUpperCase();
}
console.log(result);