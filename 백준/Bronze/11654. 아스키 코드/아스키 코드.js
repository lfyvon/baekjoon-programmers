var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
let result = "";
rl.on("line", function(line) {
    input = line;
}).on("close", function() {
    result = input.charCodeAt();
    console.log(result);
})