const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on('close',function (){
    const x = input[0];
    console.log((100 / ((1.609344 / 3.785411784) * x)).toFixed(6));
    process.exit();
});