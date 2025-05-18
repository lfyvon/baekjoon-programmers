const fs = require('fs');
const [m, seed, x1, x2] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
let r1 = r2 = -1;

for(let a = 0; a < m; a++){
    for(let c = 0; c < m; c++){
        if(x1 === (a * seed + c) % m && x2 === (a * x1 + c) % m){
            r1 = a;
            r2 = c;   
            break;
        }
    }
    if(r1 !== -1 && r2 !== -1) break;
}
console.log(r1, r2);