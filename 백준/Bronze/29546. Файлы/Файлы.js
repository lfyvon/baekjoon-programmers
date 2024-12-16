const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N1 = Number(input[0]);
const list = input.slice(1, N1 + 1).map(el => el.trim());
const N2 = Number(input[N1 + 1]);
const arr = input.slice(N1 + 2);
const result = [];
for(let i = 0; i < N2; i++){
    const [l, r] = arr[i].trim().split(" ").map(Number);
    for(let j = l - 1; j < r; j++){
        result.push(list[j]);
    }
}
console.log(result.join("\n"));