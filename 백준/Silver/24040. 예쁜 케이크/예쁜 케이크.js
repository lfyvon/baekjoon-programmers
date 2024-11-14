const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
const result = [];
for(let i = 0n; i < T; i++){
    result.push(N[i] % 9n === 0n || N[i] % 3n === 2n ? 'TAK' : 'NIE');    
}
console.log(result.join("\n"));