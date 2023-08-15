const n = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = "";
for(let i = 0; i < n.length; i++){
    if(i === 0) result += Number(n[i]).toString(2);
    else result += Number(n[i]).toString(2).padStart(3, "0");
}
console.log(result);