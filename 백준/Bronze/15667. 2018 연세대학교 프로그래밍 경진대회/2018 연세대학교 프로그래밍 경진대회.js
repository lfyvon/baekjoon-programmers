const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 0;
for(let i = 1; i <= n; i++){
    if(1 + i + i * i === n){
        result = i;
        break;
    }
}
console.log(result);