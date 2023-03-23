const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i = 0;
const result = [];
while(true){
    if(input[i] === "# 0 0") break;
    const [n, a, w] = input[i].trim().split(' ');
    if(+a > 17 || +w >= 80) result.push(`${n} Senior`);
    else result.push(`${n} Junior`);
    i++;
}
console.log(result.join('\n'));