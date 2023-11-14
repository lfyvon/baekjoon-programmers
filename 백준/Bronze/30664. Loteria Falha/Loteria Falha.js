const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => BigInt(el));
let i = 0;
const result = [];
while(input[i] !== 0n){
    result.push(input[i] % 42n === 0n ? "PREMIADO" : "TENTE NOVAMENTE");
    i++;
}
console.log(result.join("\n"));