const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const result = [];
let i = 0;
while(true){
    if(input[i][0] === 0 || input[i][1] === 0){
        result.push("AXIS");
        if(input[i][0] === 0 && input[i][1] === 0){
            break;
        }
    } else if(input[i][0] > 0 && input[i][1] > 0){
        result.push("Q1");
    } else if(input[i][0] < 0 && input[i][1] > 0){
        result.push("Q2");
    } else if(input[i][0] < 0 && input[i][1] < 0){
        result.push("Q3");
    } else{
        result.push("Q4");
    }
    i++;
}

console.log(result.join("\n"));
