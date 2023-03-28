const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, w, h] = input[0].split(' ').map(Number);
const r = Math.sqrt(w ** 2 + h ** 2);
let result = "";
for(let i = 1; i <= n; i++){
    Number(input[i]) <= r ? result += "YES\n" : result += "NO\n";
}
console.log(result.trim());