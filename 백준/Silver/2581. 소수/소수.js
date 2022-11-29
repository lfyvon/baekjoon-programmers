const [m, n] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => parseInt(el));

let min = -1;
let sum = 0;
const isPrime = (n) => {
    if(n < 2) return false;
    for(let i = 2; i * i <= n; i++){
        if(n % i == 0) return false;
    }
    return true;
}

for(let i = m; i <= n; i++){
    if(isPrime(i)) {
        sum += i;
        if(min === -1) min = i;
    }
}

if(sum > 0) console.log(sum);
console.log(min);