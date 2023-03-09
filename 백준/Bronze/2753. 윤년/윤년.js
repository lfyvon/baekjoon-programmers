var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
let result = "";
rl.on("line", function(line) {
    input = parseInt(line);
    if(input % 400 === 0){
        result = 1;
    } else if (input % 100 === 0){
        result = 0;
    } else if (input % 4 === 0){
        result = 1;
    } else {
        result = 0;
    }
}).on("close", function(){
    console.log(result);
    process.exit();
})