var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function(line){
    input = line.trim().split(" ");
}).on("close", function(){
    let count = 0;    
    if(input[0] !== ''){
        count = input.length;
    }
    console.log(count);
    process.exit();
})