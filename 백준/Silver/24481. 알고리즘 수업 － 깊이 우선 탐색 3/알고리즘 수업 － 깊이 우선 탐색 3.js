const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, R] = input[0].split(" ").map(Number);
const visited = new Array(N + 1).fill(-1);
const graph = Array.from(Array(N + 1), () => []);
let count = 0;
for(let i = 1; i <= M; i++){
    const [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
graph.map(el => el.sort((a, b) => a - b));
const dfs = (R, C) => {
    if(visited[R] === -1){
        visited[R] = C;
        for(let x of graph[R]){
            dfs(x, C + 1);
        }
    }
}
dfs(R, count);
console.log(visited.slice(1).join("\n"));