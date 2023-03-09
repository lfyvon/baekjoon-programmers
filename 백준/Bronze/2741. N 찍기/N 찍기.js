var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
let result = "";
rl.on("line", function(line) {
    input = parseInt(line);
    for (let i = 1; i <= input; i++){
        if (i === input){
            result += i;
        } else {
            result += i + "\n";
        }
    }
}).on("close", function() {
    console.log(result);
    process.exit();
})