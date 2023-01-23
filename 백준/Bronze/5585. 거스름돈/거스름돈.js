let n = 1000 - Number(require('fs').readFileSync('/dev/stdin').toString());
const coins = [500, 100, 50, 10, 5, 1];
let count = 0;
for(let i = 0; i < coins.length; i++){
    count += Math.floor(n / coins[i]);
    n = n % coins[i];
}
console.log(count);