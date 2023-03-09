var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var input = null;
rl.on("line", function(line) {
    input = line;
}).on("close", function() {
    console.log(input+"??!");
    process.exit();
});