var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", function(line) {
    input.push(line.split(' ').map(Number));
}).on("close", function() {
    for(i = 1; i <= input[0]; i++){
        result.push(input[i][0] + input[i][1]);
    }
    console.log(result.join('\n'));
    process.exit();
})