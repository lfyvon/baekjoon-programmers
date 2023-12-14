const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const leftStack = input[0].trim().split("");
const rightStack = [];
const M = Number(input[1]);
for(let i = 2; i < M + 2; i++){
    const [cmd, c] = input[i].trim().split(" ");
    if(cmd === "L"){
        if(leftStack.length) rightStack.push(leftStack.pop());
    }
    if(cmd === "D"){
        if(rightStack.length) leftStack.push(rightStack.pop());
    }
    if(cmd === "B"){
        if(leftStack.length) leftStack.pop();
    }
    if(cmd === "P"){
        leftStack.push(c);
    }
}
console.log(leftStack.join("") + rightStack.reverse().join(""));