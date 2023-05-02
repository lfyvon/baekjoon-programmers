let [n, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = "";
while(n){
    let num = n % b;
    if(num >= 10) result += String.fromCharCode(num + 55);
    else result += num;
    n = Math.floor(n / b);
}
console.log(result.split('').reverse().join(''));