const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, K] = input[0];
let st = "";
let count = 1;
const nation = input.slice(1).sort((a, b) => {
    if(a[1] === b[1]){
        if(a[2] === b[2]){
            return b[3] - a[3];
        }
        return b[2] - b[2];
    }
    return b[1] - a[1]; 
});

for(let i = 0; i < N; i++){
    if(nation[i][0] === K) st = nation[i];
}

for(let i = 0; i < N; i++){
    if(st[1] === nation[i][1] && st[2] === nation[i][2] && st[3] === nation[i][3]) break;
    count++;
}

console.log(count);