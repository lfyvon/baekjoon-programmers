const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    const num = new Array(10).fill(0);
    let check = 0;
    for(let j = 1; j <= 100; j++){
        const arr = (N[i] * j).toString().split("");
        for(let k = 0; k < arr.length; k++){
            if(!num[+arr[k]]){
                num[+arr[k]]++;
            } 
        }
        if(num.reduce((a, b) => a + b) === 10){
            check = N[i] * j;
            break;
        }
    }

    result.push(`Case #${i + 1}: ${check ? check : "INSOMNIA"}`);
}
console.log(result.join("\n"));