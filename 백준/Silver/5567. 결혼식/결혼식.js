const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const n = input[0][0];
const m = input[1][0];
const graph = Array.from({ length: n + 1 }).map(() => []);
const visited = Array.from({ length: n + 1 }).map(() => 0);
for(let i = 2; i < m + 2; i++){
    const [x, y] = input[i];
    graph[x].push(y);
    graph[y].push(x);
}
const bfs = (start) => {
    const queue = [];
    queue.push([start, 0]);
    visited[start] = 1;
    let result = 0;
    while(queue.length){
        const [x, count] = queue.shift();
        if(count > 1) return result;
        for(let node of graph[x]){
            if(!visited[node]){
                result++;
                visited[node] = 1;
                queue.push([node, count + 1]);
            }
        }
    }
    return result;
}
console.log(bfs(1));