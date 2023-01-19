const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let result = [];
for(let i = 0; i < 2; i++){
    const [t, f, s, p, c] = input[i].split(' ').map(Number);
    result.push(t * 6 + f * 3 + s * 2 + p + c * 2);
}
console.log(result.join(' '));;