const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    result.push(input[i]);
    let str = "none";
    if(input[i].includes("17") && input[i].includes("18")) str = "both";
    else if(input[i].includes("17")) str = "zack";
    else if(input[i].includes("18")) str = "mack";
    result.push(str + "\n");
}
console.log(result.join("\n").trim());