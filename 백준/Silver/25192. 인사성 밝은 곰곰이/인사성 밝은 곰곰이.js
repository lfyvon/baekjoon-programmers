const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const n = Number(input[0]);
const set = new Set();
let count = 0;
for(let i = 1; i <= n; i++){
    if(input[i] === 'ENTER'){
        set.clear();
    } else{
        if(!set.has(input[i])){
            set.add(input[i]);
            count++;
        }
    }
}
console.log(count);