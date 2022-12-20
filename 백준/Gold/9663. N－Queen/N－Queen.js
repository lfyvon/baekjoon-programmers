const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const pos = new Array(n).fill(0);
let count = 0;

const findQ = (r) => {
    for(let i = 0; i < r; i++){
        if(pos[r] === pos[i] || r - i === Math.abs(pos[r] - pos[i])) return false;
    }
    return true;
}

const dfs = (r) => {
    if(r === n){
        count++;
    } else{
        for(let i = 0; i < n; i++){
            pos[r] = i;
            if(findQ(r)) dfs(r + 1);
        }
    }
}

dfs(0);
console.log(count);