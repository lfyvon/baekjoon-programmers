const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = Number(input[0]);
const g = input[1].split(' ').map(Number);
const s = g.reduce((a, b) => a + b, 0);
const scale = new Array(s + 1).fill(0);

const dfs = (index, weight) => {
    if(index === k){
        if(weight >= 0) scale[weight] = 1;
        return;
    }

    dfs(index + 1, weight);
    dfs(index + 1, weight + g[index]);
    dfs(index + 1, weight - g[index]);
}

dfs(0, 0);
console.log(scale.filter(el => el === 0).length);