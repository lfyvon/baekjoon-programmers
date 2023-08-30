const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const n = input[0][0];
const [p1, p2] = input[1];
const m = input[2][0];
const graph = Array.from({ length: n + 1 }).map(() => []);
const visited = Array.from({ length: n + 1 }).map(() => 0);

for(let i = 3; i < m + 3; i++){
    const [x, y] = input[i];
    graph[x].push(y);
    graph[y].push(x);
}

const bfs = (start, target) => {
    const queue = [];
    queue.push([start, 0]);
    visited[start] = 1;
    while(queue.length){
        const [x, count] = queue.shift();
        if(x === target) return count;
        for(let node of graph[x]){
            if(!visited[node]){
                visited[node] = 1;
                queue.push([node, count + 1]);
            }
        }
    }
    return -1;
}

console.log(bfs(p1, p2))