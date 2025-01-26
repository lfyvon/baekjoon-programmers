const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(input[i] !== '0'){
    let num = input[i].trim().split("").map(Number);
    let count = 0;
    for(let j = 0; j < num.length; j++){
        if(num[j] === 1){
            count += 2;
        } else if(num[j] === 0){
            count += 4;
        } else {
            count += 3;
        }
    }
    count += num.length + 1;
    result.push(count);
    i++;
}
console.log(result.join("\n"));