var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = null;
let stars = null;
let answer = "";
rl.on("line", function(line) {
    input = parseInt(line);

    for (let i = 0; i < input; i++) {
        stars = "*".repeat(i+1);
        answer += stars + "\n";
    }
}).on("close", function() {
    console.log(answer);
    process.exit();
})