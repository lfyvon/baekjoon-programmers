const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let result = [];
let i = 0;
while(true){
    const [M, F] = input[i].split(' ').map(Number);
    if(!M && !F) break;
    result.push(M + F);
    i++
}
console.log(result.join('\n'));