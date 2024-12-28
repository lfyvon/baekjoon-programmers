const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const result = [];
for(let i = 1; i <= T; i++){
    let str = input[i].trim().split("");
    const revStr = input[i].trim().split("").reverse().join("");
    let reStr = "";
    while(str.length){
        str.pop();
        let union = str.join("") + revStr;
        if(union === union.split("").reverse().join("")){
            reStr = union;
        }
    }
    result.push(reStr);
}
console.log(result.join("\n"));