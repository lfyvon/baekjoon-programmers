const [n, k, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const visited = new Array(n).fill(0);
const result = new Set();
const dfs = (count, num) => {
    if(count === k){
        result.add(num);
    }

    for(let i = 0; i < arr.length; i++){
        if(!visited[i]){
            visited[i] = 1;
            dfs(count + 1, num + arr[i]);
            visited[i] = 0;
        }
    }
}
dfs(0, "");
console.log(result.size);