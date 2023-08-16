const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [v, e] = input[0];
let parents = new Array(v + 1);
const edge = [];
let result = 0;
function findParent(parent, x) {
    if (parent[x] !== x) {
        parent[x] = findParent(parent, parent[x]);
    }
    return parent[x];
}

const unionFind = (parent, a, b) => {
    const n1 = findParent(parent, a);
    const n2 = findParent(parent, b);
    n1 < n2 ? parent[n2] = n1 : parent[n1] = n2;
    return parents;
}

for(let i = 0; i <= v; i++){
    parents[i] = i;
}

for(let i = 1; i <= e; i++){
    edge.push(input[i]);
}

edge.sort((a, b) => a[2] - b[2]);

for(let i = 0; i < e; i++){
    const [a, b, c] = edge[i];
    if(findParent(parents, a) !== findParent(parents, b)){
        result += c;
        parents = unionFind(parents, a, b);
    }
}
console.log(result);