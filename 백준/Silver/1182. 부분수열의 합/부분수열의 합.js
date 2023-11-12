const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, S] = input[0];
const arr = input[1];
let result = 0;

const dfs = (sum, i) => {
    if(i === N) return;
    
    sum += arr[i];
    if(sum === S) result++;

    dfs(sum, i + 1);
    dfs(sum - arr[i], i + 1);
}
dfs(0, 0);
console.log(result);