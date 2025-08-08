const fs = require('fs');
const [d1, d2, d3] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
const a = (d1 + d2 - d3) / 2;
const b = d1 - a;
const c = d2 - a;
if(a > 0 && b > 0 && c > 0){
    console.log(1);
    console.log(`${a.toFixed(1)} ${b.toFixed(1)} ${c.toFixed(1)}`);
} else{
    console.log(-1);
}