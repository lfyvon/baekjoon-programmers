var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let result = "";
rl.on("line", function(line) {
    input = line.split('');

    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++){
        result += input.indexOf(String.fromCharCode(i)) + "\n";
    }
    result = result.slice(0, -1);

}).on("close", function() {
    console.log(result);
    process.exit();
})
