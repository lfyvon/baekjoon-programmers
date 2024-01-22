const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    const [N, M] = input[i].split(" ").map(Number);
    let count = 0;
    for(let j = N; j <= M; j++){
        count += j.toString().split("0").length - 1;
    }
    result.push(count);
}
console.log(result.join("\n"));