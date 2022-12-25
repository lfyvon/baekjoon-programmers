const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
let input = [];
 
rl.on("line", (line) => {
    input.push(line);
});
 
rl.on('close', () => {
    const password = input.slice(1).map(el => el.trim());
    const result = [];
    password.forEach(el => el.length >= 6 && el.length <= 9 ? result.push('yes') : result.push('no'));
    console.log(result.join('\n'));
    process.exit();
})