const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [N, K] = input[0];
const nation = input.slice(1);
let st = "";
let count = 1;

for(let i = 0; i < N; i++){
    if(nation[i][0] === K) st = nation[i];
}

for(let i = 0; i < N; i++){
    if(nation[i][1] > st[1]){
        count++;
    } else if(nation[i][1] === st[1] && nation[i][2] > st[2]){
        count++;
    } else if(nation[i][1] === st[1] && nation[i][2] === st[2] && nation[i][3] > st[3]){
        count++;  
    }
}

console.log(count);