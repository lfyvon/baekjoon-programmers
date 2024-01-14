const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let i = 0;
const result = [];
while(input[i] !== -1){
    const num = input[i];
    const div = [1];
    let sum = 1;
    for(let j = 2; j < Math.sqrt(num); j++){
        if(num % j === 0){
            div.push(j);
            div.push(num / j);
            sum += j + num / j;
        } 
    }
    result.push(num === sum ? `${num} = ${div.sort((a, b) => a - b).join(" + ")}` : `${num} is NOT perfect.`);
    i++;
}
console.log(result.join("\n"));