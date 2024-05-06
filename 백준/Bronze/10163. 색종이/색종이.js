const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const maxLen = 1001
const arr = Array.from(new Array(maxLen + 1), () => new Array(maxLen + 1).fill(0));
const result = new Array(N + 1).fill(0);
for(let i = 1; i <= N; i++){
    const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
    for(let j = x1; j < x1 + x2; j++){
        for(let k = y1; k < y1 + y2; k++){
            arr[j][k] = i;
        }
    }
}

for(let i = 0; i < maxLen; i++){
    for(let j = 0; j < maxLen; j++){
        result[arr[i][j]]++;
    }
}
result.shift();
console.log(result.join("\n"));