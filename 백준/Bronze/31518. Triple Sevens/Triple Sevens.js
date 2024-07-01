const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
for(let i = 1; i <= 3; i++){
    if(input[i].includes("7")) count++;
}
console.log(count === 3 ? 777 : 0);