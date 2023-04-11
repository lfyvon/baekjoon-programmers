const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const tree = Array.from(new Array(n + 1), () => new Array());
for(let i = 1; i < n; i++){
    const [from, to, dist] = input[i].split(' ').map(Number);
    tree[from].push([to, dist]);
    tree[to].push([from, dist]);
}

const bfs = (s) => {
    const check = new Array(n + 1).fill(0);
    const queue = [];
    queue.push([s, 0]);
    let max = { node: 0, dist: 0 };
    while(queue.length){
        const [node, dist] = queue.shift();
        if(check[node]) continue;
        check[node] = 1;
        if(max.dist < dist) max = { node, dist };
        for(let [nextNode, nextDist] of tree[node]){
            queue.push([nextNode, dist + nextDist]);
        }
    }
    return max;
}

console.log(bfs(bfs(1).node).dist);