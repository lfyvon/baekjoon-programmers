var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
rl.on("line", function(line) {
    input = parseInt(line);
    for (let i = 1; i <= 9; i++){
        console.log(`${input} * ${i} = ${input * i}`); 
    }
}).on("close", function() {
    process.exit();
})