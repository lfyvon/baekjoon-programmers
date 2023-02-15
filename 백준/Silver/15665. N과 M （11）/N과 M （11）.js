const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const visited = new Array(n + 1).fill(0);
const seq = [];
const result = [];

const dfs = () => {
    if(m === seq.length){
        result.push(seq.join(' '));
    } else{
        for(let i = 0; i < n; i++){
            seq.push(arr[i]);
            dfs();
            seq.pop();
        }
    }
}

dfs();
console.log([...new Set(result)].join('\n'));