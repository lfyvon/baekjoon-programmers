const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [n, m] = input[0];
const graph = Array.from({length : n + 1}, () => []);
const bacon = new Array(n + 1).fill(0);

for(let i = 1; i <= m; i++){
    const [start, end] = input[i];
    graph[start].push(end);
    graph[end].push(start);
}

const bfs = (start) => {
    const visited = new Array(n + 1).fill(false);
    const queue = [[start, 0]];
    while(queue.length){
        const [node, count] = queue.shift();
        if(!visited[node]){
            visited[node] = true;
            bacon[node] += count;
            graph[node].map(el => queue.push([el, count + 1]));
        }
    }
}

for(let i = 1; i <= n; i++){
    bfs(i);
}
bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);