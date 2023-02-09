const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const seq = [];
const result = [];

const dfs = (count) => {
    if(m === count){
        result.push(seq.join(' '));
    } else{
        for(let i = 0; i < n; i++){
            seq.push(arr[i]);
            dfs(count + 1);
            seq.pop();
        }
    }
}

dfs(0);
console.log(result.join('\n'));