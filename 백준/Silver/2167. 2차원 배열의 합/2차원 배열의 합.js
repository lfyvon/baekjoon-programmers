const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [N, M] = input[0];
const arr = input.slice(1, N + 1);
const K = input[N + 1][0];
const result = [];
for(let index = N + 2; index < N + K + 2; index++){
    const [i, j, x, y] = input[index];
    let sum = 0;
    for(let a = i - 1; a < x; a++){
        for(let b = j - 1; b < y; b++){
            sum += arr[a][b];
        }
    }
    result.push(sum);
}
console.log(result.join("\n"));