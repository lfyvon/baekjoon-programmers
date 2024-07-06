const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
let i = 1;
let pair = [0, 0];
let result = [];
while(true){
    if(input[i][0] === -1.0 && input[i][1] === -1.0){
        break;
    }
    else if(input[i][0] === 0 && input[i][1] === 0){
        result.push(Math.round(pair[0] / pair[1] * input[i - 1][1]));
        pair = [0, 0];
    }
    else if(input[i][1] <= input[i - 1][1]){
        pair[0] += input[i][0] - input[i - 1][0];
        pair[1] += input[i - 1][1] - input[i][1];
    }
    i++;
}
console.log(result.join("\n"));