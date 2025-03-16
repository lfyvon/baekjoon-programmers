const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [cu, du] = input[0].split(" ").map(Number);
const [cd, dd] = input[1].split(" ").map(Number);
const [cp, dp] = input[2].split(" ").map(Number);
let h = Number(input[3]);
let time = 0;

while(true){
    if(time % cu === 0) h -= du;
    if(time % cd === 0) h -= dd;
    if(time % cp === 0) h -= dp;
    if(h <= 0) break;
    time++;
}
console.log(time);