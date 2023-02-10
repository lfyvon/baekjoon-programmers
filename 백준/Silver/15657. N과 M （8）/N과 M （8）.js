const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const visited = new Array(n + 1).fill(0);
const seq = [];
const result = [];

const dfs = (count, start) => {
    if(m === count){
        result.push(seq.join(' '));
    } else{
        for(let i = start; i < n; i++){
            seq.push(arr[i]);
            dfs(count + 1, i);
            seq.pop();
        }
    }
}

dfs(0, 0);
console.log(result.join('\n'));