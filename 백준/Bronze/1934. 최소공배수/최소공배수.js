const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
const gcd = (a, b) => {
    while(b > 0){
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

const lcm = (a, b) => (a * b) / gcd(a, b);
for(let i = 1; i <= t; i++){
    const [a, b] = input[i].split(' ').map(Number);
    result.push(lcm(a, b));
}
console.log(result.join('\n'))