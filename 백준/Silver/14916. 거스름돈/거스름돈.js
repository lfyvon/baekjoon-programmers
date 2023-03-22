let n = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;
while(true){
    if(n % 5 === 0){
        count += n / 5;
        break;
    } else{
        n -= 2;
        count++;
    }
    if(n < 0) break;
}
console.log(n < 0 ? -1 : count);