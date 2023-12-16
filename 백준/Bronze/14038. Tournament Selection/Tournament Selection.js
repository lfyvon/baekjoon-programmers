const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
let count = 0;
for(let i = 0; i < 6; i++){
    if(input[i] === "W") count++;
}
console.log(count > 4 ? 1 : count > 2 ? 2 : count > 0 ? 3 : -1);