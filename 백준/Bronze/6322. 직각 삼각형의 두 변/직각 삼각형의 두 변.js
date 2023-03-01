const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
const result = [];
while(true){
    if(input[i] === "0 0 0") break;
    const [a, b, c] = input[i].split(' ').map(Number);
    result.push(`Triangle #${i + 1}`);
    let leg = "a";
    let len = c * c - b * b;
    if(b === -1){
        leg = "b";
        len = c * c - a * a;
    }
    if(c === -1){
        leg = "c";
        len = a * a + b * b;
    }
    len = Math.sqrt(len).toFixed(3);
    if(isNaN(len) || len <= 0){
        result.push("Impossible.");
    } else{
        result.push(`${leg} = ${len}`);
    }
    result.push("");
    i++;
}

result.pop();
console.log(result.join("\n"))