const fs = require('fs');
let X = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim();
const MAX = 9999;
let Y = Number(X) + 1;
let result = -1;
while(Y < MAX){
    X = Y.toString();
    const A = Number(X.slice(0, 2));
    const B = Number(X.slice(2));
    if((A + B) ** 2 === Y){
        result = Y;
        break;
    }
    Y++;
}

console.log(result);