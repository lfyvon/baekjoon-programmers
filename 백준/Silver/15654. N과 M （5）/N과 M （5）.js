const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
const visited = new Array(n + 1).fill(0);
const temp = [];
const result = [];

const dfs = () => {
    if(m === temp.length){
        result.push(temp.join(' '));
    } else{
        for(let i = 0; i < arr.length; i++){
            if(!visited[i]){
                visited[i] = 1;
                temp.push(arr[i]);
                dfs();
                temp.pop();
                visited[i] = 0;
            }
        }
    }
}

dfs();
console.log(result.join('\n'));