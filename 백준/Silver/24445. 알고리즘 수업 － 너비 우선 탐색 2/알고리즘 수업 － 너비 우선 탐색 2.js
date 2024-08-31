const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m, r] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => new Array());
for(let i = 1; i <= m; i++){
    const [u, v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}
for(let i = 1; i <= n; i++){
    graph[i].sort((a, b) => b - a);
}
const bfs = (V, E, R) => {
    const visited = Array.from(Array(n + 1), () => 0);
    let count = 1;
    visited[R] = count++;
    const queue = [R];
    while(queue.length){
        let v = queue.shift();
        for(let x of graph[v]){
            if(!visited[x]){
                visited[x] = count++;
                queue.push(x);
            }
        }
    }
    return visited.slice(1);    
}
console.log(bfs(n, m, r).join("\n"));