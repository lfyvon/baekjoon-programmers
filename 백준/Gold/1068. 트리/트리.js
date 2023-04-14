const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const parent = input[1].split(' ').map(Number);
const deleteNode = Number(input[2]);
let root = 0;
const tree = [];
let count = 0;

for(let i = 0; i < n; i++){
    if(parent[i] === -1){
        root = i;
    } else{
        if(!tree[parent[i]]) tree[parent[i]] = [];
        tree[parent[i]].push(i);
    }
}

const dfs = (node) => {
    if(root === deleteNode) return 0;
    if(!tree[node]){
        count++;
        return;
    }
    tree[node].forEach(el => {
        if(el === deleteNode){
            if(tree[node].length === 1) count++;
            return;
        }
        dfs(el);
    });
    return count;
}

console.log(dfs(root));