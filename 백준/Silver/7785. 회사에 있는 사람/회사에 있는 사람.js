const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const set = new Set();
for(let i = 1; i <= n; i++){
    const [name, state] = input[i].trim().split(' ');
    if(state === 'enter'){
        set.add(name);
    }
    if(state === 'leave'){
        set.delete(name);
    }
}
console.log([...set].sort((a, b) => a > b ? -1 : 1).join('\n'));