var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function(line) {
    input = parseInt(line);
}).on("close", function() {
    let star = "";
    let blank = "";
    let result= "";
    for(let i = 1; i <= input; i++) {
        blank = " ".repeat(input-i);
        star = "*".repeat(i);
        result += blank + star + "\n";
    }
    console.log(result);
    process.exit();
})