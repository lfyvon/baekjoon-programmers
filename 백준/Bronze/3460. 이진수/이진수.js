const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const n = Number(input[i]).toString(2);
    result.push(n.split("").reverse().reduce((a, b, idx) =>{
        if(b === "1") a.push(idx);
        return a; 
    }, []).join(" "));
}
console.log(result.join("\n"));