const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(+input[i] !== -1){
    let num = input[i].split(" ").map(Number);
    let count = 0;
    for(let j = 0; j < num.length - 1; j++){
        if(num.includes(num[j] * 2)) count++;
    }
    result.push(count); 
    i++;
}
console.log(result.join("\n"))