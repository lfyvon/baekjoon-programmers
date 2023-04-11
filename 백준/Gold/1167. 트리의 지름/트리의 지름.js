const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const v = Number(input[0]);
const tree = Array.from(new Array(v + 1), () => new Array());
let check = new Array(v + 1).fill(0);
let max = { node: 0, dist: 0 };

for(let i = 1; i <= v; i++){
    const [from, ...node] = input[i].split(' ').map(Number);
    const len = node.length;
    for(let j = 0; j < len - 1; j += 2){
        const to = node[j];
        const dist = node[j + 1];
        tree[from].push([to, dist]);
    }
}

const dfs = (node, dist) => {
    check[node] = 1;
    if(max.dist < dist) max = {node, dist};
    for(let [nextNode, nextDist] of tree[node]){
        if(!check[nextNode]){
            dfs(nextNode, dist + nextDist);
        }
    }
}

dfs(1, 0);
max.dist = 0;
check = new Array(v + 1).fill(0);
dfs(max.node, 0);
console.log(max.dist);