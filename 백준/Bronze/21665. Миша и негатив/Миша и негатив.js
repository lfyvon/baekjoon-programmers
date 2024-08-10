const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
const [n, m] = input[0].split(" ").map(Number);
const arr1 = input.slice(1, n + 1);
const arr2 = input.slice(n + 2);
let count = 0;
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(arr1[i][j] === arr2[i][j]) count++;
    }
}
console.log(count);