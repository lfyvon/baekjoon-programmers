var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = null;
let num1, num2 = null;
rl.on("line", function(line){
    input = line.split(' ').map((el) => parseInt(el));
    num1 = input[0];
    num2 = input[1];
    if (num1 < num2){
        result = "<";
    } else if (num1 > num2){
        result = ">";
    } else {
        result = "=="
    }
}).on("close", function() {
    console.log(result);
    process.exit();
})