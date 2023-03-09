var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", function(line){
    if(line === '0 0'){
        rl.close();
    } else{
        input.push(line.split(' ').map(Number));
    }
}).on("close", function(){
    for(let i = 0; i < input.length; i++){
        result.push(input[i][0] + input[i][1]);
    }
    console.log(result.join('\n'));
})