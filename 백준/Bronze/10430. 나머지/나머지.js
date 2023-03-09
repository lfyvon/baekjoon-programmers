var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let A = null;
let B = null;
let C = null;
rl.on("line", function(line) {
    input = line.split(' ').map((el) => parseInt(el));
    A = input[0];
    B = input[1];
    C = input[2];
}).on("close", function() {
    console.log((A+B)%C);
    console.log(((A%C) + (B%C))%C);
    console.log((A*B)%C);
    console.log(((A%C) * (B%C))%C);
    process.exit();
});
