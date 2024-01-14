const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let i = 0;
const result = [];
while(input[i] !== -1){
    const num = input[i];
    const div = [];
    let sum = 0;
    for(let j = 1; j < num; j++){
        if(num % j === 0){
            div.push(j);
            sum += j;
        } 
    }
    result.push(num === sum ? `${num} = ${div.join(" + ")}` : `${num} is NOT perfect.`);
    i++;
}
console.log(result.join("\n"));