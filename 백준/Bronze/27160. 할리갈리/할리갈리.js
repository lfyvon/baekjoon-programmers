const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];
const map = new Map();
for(let i = 1; i <= n; i++){
    const [item, num] = input[i].split(' ');
    if(map.has(item)){
        map.set(item, map.get(item) + +num);
    } else{
        map.set(item, +num);
    }
}

console.log([...map].some(el => el[1] === 5) ? "YES" : "NO");