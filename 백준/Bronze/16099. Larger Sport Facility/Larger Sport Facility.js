const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function (){
    const n = Number(input[0]);
    const result = [];
    for(let i = 1; i <= n; i++){
        const [lt, wt, le, we] = input[i].split(" ").map(Number);
        result.push(lt * wt > le * we ? "TelecomParisTech" : lt * wt < le * we ? "Eurecom" : "Tie");
    }
    console.log(result.join("\n"));
    process.exit();
});