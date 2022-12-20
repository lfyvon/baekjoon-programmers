const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;

function checkNum(n){
    if(n < 100){
        return true;
    }
    let num = n.toString();
    let diff = num[1] - num[0];
    for(let j = 1; j < num.length - 1; j++){
        if(num[j + 1] - num[j] !== diff) return false;
    }
    return true;
}

for(let i = 1; i <= n; i++){
    if(checkNum(i)) count++;
}

console.log(count);