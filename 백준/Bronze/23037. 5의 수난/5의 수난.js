let n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let sum = 0;
while(n > 0){
    let num = n % 10;
    sum += Math.pow(num, 5);
    n = Math.floor(n / 10);
}
console.log(sum);
