const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const seq = [];
const result = [];

const dfs = (start) => {
    if(m === seq.length){
        result.push(seq.join(' '));
    } else{
        for(let i = start; i < n; i++){
            seq.push(arr[i]);
            dfs(i);
            seq.pop();
        }
    }
}

dfs(0);
console.log([...new Set(result)].join('\n'));