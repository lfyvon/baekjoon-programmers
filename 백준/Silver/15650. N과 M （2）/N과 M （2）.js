const [n, m] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(el => parseInt(el));
const arr = new Array(m).fill(0);
const visited = new Array(n + 1).fill(0);
const result = [];

const dfs = (start, count) => {
    if(count === m){
        result.push(arr.join(' '));
    } else{
        for(let i = start; i <= n; i++){
            if(visited[i] === 0){
                arr[count] = i;
                visited[i] = 1;
                dfs(i, count + 1);
                visited[i] = 0;
            }
        }
    }
}

dfs(1, 0);
console.log(result.join('\n'));