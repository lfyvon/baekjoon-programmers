var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function(line){
    input.push(Number(line.split(' ')));
}).on("close", function(){
    let num = "0123456789";
    let count = Array(10).fill(0);
    let multi = String(input[0] * input[1] * input[2]);

    for(let i = 0; i < multi.length; i++) {
        count[num.indexOf(multi[i])]++;
    }
    console.log(count.join("\n"));
    process.exit();
})