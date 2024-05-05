const N = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
let result = "NO";
for(let i = 1; i < N.length; i++){
    if(N.length === 1) break;
    let a = 1;
    let b = 1;
    for(let j = 0; j < i; j++){
        a *= N[j];
    }
    for(let j = i; j < N.length; j++){
        b *= N[j];
    }
    if(a === b){
        result = "YES";
        break;
    }
}
console.log(result);