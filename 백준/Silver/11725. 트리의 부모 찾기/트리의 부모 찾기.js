const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const edges = input.slice(1).map(el => el.trim().split(' ').map(Number));
const tree = [...Array(n + 1)].map(() => []);
const result = [];
edges.forEach(([a, b]) => {
    tree[a].push(b);
    tree[b].push(a);
});

const bfs = () => {
    const visited = Array(n + 1).fill(0);
    visited[1] = 1;
    const queue = [1];

    while(queue.length){
        const node = queue.shift();
        for(let par of tree[node]){
            if(visited[par]) continue;
            visited[par] = 1;
            result[par] = node;
            queue.push(par);
        } 
    }
}

bfs();
console.log(result.splice(2).join('\n'));