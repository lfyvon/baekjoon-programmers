const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let count = 0;
for(let i = 1; i <= n; i++){
    let num = i;
    while(num > 0){
        if(num % 10 % 3 === 0 && num % 10 !== 0) count++;
        num = Math.floor(num / 10);
    }
}

console.log(count);