const [n, m] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));
const arr = new Array(m).fill(0);
const visited = new Array(n + 1).fill(0);
const result = [];

const dfs = (k) => {
    if(k === m){
        result.push(arr.join(' '));
    } else{
        for(let i = 1; i <= n; i++){
            if(visited[i] === 0){
                arr[k] = i;
                visited[i] = 1;
                dfs(k + 1);
                visited[i] = 0;
            }
        }
    }
}

dfs(0);
console.log(result.join('\n'));
