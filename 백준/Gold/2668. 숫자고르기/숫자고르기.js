const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const n = input[0];
const visited = new Array(n + 1).fill(0);
const checked = new Array(n + 1).fill(0);
let result = [];
const dfs = (x, start) => {
    if(input[x] === start) {
        for(let i = 1; i <= n; i++){
            if(!checked[i] && visited[i]) checked[i] = 1;
        }
    }
    if(!visited[x]){
        visited[x] = 1;
        dfs(input[x], start);
        visited[x] = 0;    
    }
}

for(let i = 1; i <= n; i++){
    if(!checked[i]){
        dfs(i, i);
    }
}
result = checked.map((e,i) => e === 1 ? i : undefined).filter(x => x);
console.log(result.length);
console.log(result.join("\n"));