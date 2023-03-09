var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
const result = [];
rl.on("line", function(line){
    input.push(line.split(' ').map(Number));
    
}).on("close", function() {
    let n = input[0][0];
    let x = input[0][1];

    for (let i = 0; i < n; i++) {
        if(input[1][i] < x) {
            result.push(input[1][i]);
        }
    }
    console.log(result.join(' '));
    process.exit();
})