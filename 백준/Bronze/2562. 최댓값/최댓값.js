var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function(line) {
    input.push(Number(line));
}).on("close", function() {
    let result = input[0];
    let num = 0;
    for(let i = 1; i < 9; i++) {
        if(result < input[i]) {
            result = input[i];
            num = i;
        }
    }
    console.log(result);
    console.log(num+1);
    process.exit();
})