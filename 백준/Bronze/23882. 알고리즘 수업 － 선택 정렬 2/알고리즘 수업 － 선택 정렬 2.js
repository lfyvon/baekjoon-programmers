const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
let count = 0;
let result = -1;
for(let i = n - 1; i > 0; i--){
    let idx = a.indexOf(Math.max(...a.slice(0, i + 1)));
    if(idx !== i){
        [a[idx], a[i]] = [a[i], a[idx]];
        count++;
        if(count === k){
            result = a.join(' ');
            break;
        }
    }
}
console.log(result);