var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = null;
rl.on("line", function(line) {
    input = parseInt(line);
}).on("close", function() {
    console.log(input - 543);
    process.exit();
})