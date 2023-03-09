var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = 0;
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let num = input[0];
    for(i = 0; i < input[0]; i++) {
        result += Number(input[1][i]);
    }
    console.log(result);
})