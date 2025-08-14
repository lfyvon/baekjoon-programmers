const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
let i = 0;
let result = [];
while(input[i] !== '0 0'){
    const [S, B] = input[i++].trim().split(" ").map(Number);
    if(S + B === 13) result.push('Never speak again.');
    else if(S > B) result.push('To the convention.');
    else if(S < B) result.push('Left beehind.');
    else if(S === B) result.push('Undecided.'); 
}
console.log(result.join("\n"));