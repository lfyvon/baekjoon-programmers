const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const result = [];
let line = "";
for(let i = 1; i <= N * M; i++){
    line += i + " ";
    if(i % M === 0){
        result.push(line.trim());
        line = "";
    }
}
console.log(result.join("\n"));