var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";
let result = "";
rl.on("line", function(line) {
    input = parseInt(line);
    if (input >= 90){
        result = "A";
    } else if (input >= 80){
        result = "B";
    } else if (input >= 70){
        result = "C";
    } else if (input >= 60){
        result = "D";
    } else {
        result = "F";
    }
}).on("close", function() {
    console.log(result);
    process.exit();
})