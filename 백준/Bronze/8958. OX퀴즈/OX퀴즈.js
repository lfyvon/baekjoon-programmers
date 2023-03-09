let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let count = Number(input[0]);
for (let i = 1; i <= count; i++){
    let result = 0;
    let countO = 0;
    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === 'O'){
            countO++;
        }else{
            countO = 0;           
        }
        result += countO;
    }
    console.log(result);
}