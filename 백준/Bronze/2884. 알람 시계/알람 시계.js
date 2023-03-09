var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = [];
rl.on("line", function(line){
    input = line.split(' ').map(Number);
}).on("close", function() {
    let hour = input[0];
    let min = input[1];

    if(min - 45 < 0){
        min += 15;
        hour--;
        if(hour < 0){
            hour = 23;
        }
    } else {
        min -= 45
    }
    result = [hour, min];
    console.log(result.join(" "));
    process.exit();
})