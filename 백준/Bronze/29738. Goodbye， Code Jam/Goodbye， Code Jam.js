const [T, ...N] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < T; i++){
    let str = `Case #${i + 1}: `;
    if(N[i] <= 25){
        str +=  "World Finals";
    } else if(N[i] <= 1000){
        str +=  "Round 3";
    } else if(N[i] <= 4500){
        str +=  "Round 2";
    } else{
        str +=  "Round 1";
    }
    result.push(str);
}
console.log(result.join("\n"));