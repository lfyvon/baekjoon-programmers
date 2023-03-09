var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
let result = "";
rl.on("line", function(line) {
    input = Number(line);
}).on("close", function() {
    for(let i = input; i >= 1; i--){
        result += i + "\n";
    }
    result = result.slice(0, -1);
    console.log(result);
    process.exit();
}) 