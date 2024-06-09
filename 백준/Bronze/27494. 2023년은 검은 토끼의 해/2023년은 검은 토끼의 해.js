const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let count = 0;
for(let i = 2023; i <= N; i++){
    const check = "2023";
    const num = i.toString();
    let k = 0;
    for(let j = 0; j < num.length; j++){
        if(check[k] === num[j]) k++;
        if(k === check.length){
            count++;
            break;
        } 
    }
}
console.log(count);