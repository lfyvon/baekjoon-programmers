var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let sum = 0;
let result = 0;
rl.on("line", function(line) {
    input = line.split(' ').map((el) =>Math.pow(parseInt(el), 2));
    for(let i = 0; i < input.length; i++){
        sum += input[i];
    }
    result = sum % 10;
}).on("close", function() {
    console.log(result);
    process.exit();
})