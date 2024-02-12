const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];

const gcd = (num1, num2) => (num2 > 0 ? gcd(num2, num1 % num2) : num1);

for(let i = 1; i <= T; i++){
    let [n, ...arr] = input[i].split(" ").map(Number);
    let sum = 0;
    for(let j = 0; j < n - 1; j++){
        for(let k = j + 1; k < n; k++){
            sum += gcd(arr[j], arr[k]);
        }
    }
    result.push(sum);
}

console.log(result.join("\n"));