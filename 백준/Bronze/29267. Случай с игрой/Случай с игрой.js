const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input[0].split(" ").map(Number);
let count = 0;
let b = 0;
const result = [];
for(let i = 1; i <= n; i++){
    let s = input[i].trim();
    if(s === "load"){
        b = count;
        result.push(count);
    }
    if(s === "save"){
        count = b;
        result.push(count);
    }
    if(s === "shoot"){
        b--;
        result.push(b);
    }
    if(s === "ammo"){
        b += k;
        result.push(b);
    }
}
console.log(result.join("\n"));