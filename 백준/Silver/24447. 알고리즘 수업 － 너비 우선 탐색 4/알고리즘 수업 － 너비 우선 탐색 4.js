const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m, r] = input[0].split(' ').map(Number);
const graph = Array.from(Array(n + 1), () => new Array());
for(let i = 1; i <= m; i++){
    const [u, v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
}
for(let i = 1; i <= n; i++){
    graph[i].sort((a, b) => a - b);
}
const bfs = (V, E, R) => {
    const visited = Array.from(Array(V + 1), () => -1n);
    const visited2 = Array.from(Array(V + 1), () => 0n);
    visited[R] = 0n;
    let count = 1n;
    visited2[R] = count++;
    const queue = [R];
    while(queue.length){
        let v = queue.shift();
        for(let x of graph[v]){
            if(visited[x] === -1n){
                visited[x] = visited[v] + 1n;
                visited2[x] = count++;
                queue.push(x);
            }
        }
    }
    let result = 0n;

    for(let i = 1; i <= V; i++){
        result += visited[i] * visited2[i];
    }
    return result.toString();    
}
console.log(bfs(n, m, r));