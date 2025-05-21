const fs = require('fs');
const [a, b, c] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number).sort((a, b) => a - b);
const ba = b - a;
const cb = c - b;
let result = 0;

if(ba === cb){
    result = c + cb;
} else if(ba > cb){
    result = a + cb;
} else {
    result = b + ba;
}
console.log(result);
