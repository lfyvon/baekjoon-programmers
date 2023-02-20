const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(BigInt));
const result = [];
let i = 0;
while(true){
    const [c, w, l, p] = input[i];
    if(c === 0n) break;
    result.push((c ** (w * l * p)).toString());
    i++;
}
console.log(result.join('\n'));