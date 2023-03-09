var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", function(line){
    input.push(line.split(' ').map(Number));
}).on("close", function(){
    let max = input[1][0];
    let min = input[1][0];
    for(let i = 1; i < input[0]; i++){
        if(max < input[1][i]){
            max = input[1][i];
        } else if(min > input[1][i]){
            min = input[1][i];
        }
    }
    result = [min, max];
    console.log(result.join(' '));
    process.exit();
})