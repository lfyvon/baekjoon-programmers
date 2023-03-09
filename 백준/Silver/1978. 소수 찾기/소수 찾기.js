let input = require('fs').readFileSync('/dev/stdin'
).toString().trim().split('\n');

const count = parseInt(input[0]);
const nums = input[1].split(' ').map(x => parseInt(x));
let result = 0;

const isPrime = (n) => {
    if(n === 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

for(let i = 0; i < count; i++){
    if(isPrime(nums[i])){
        result++;
    }
}

console.log(result);

