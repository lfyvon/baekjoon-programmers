const fs = require('fs');
const n = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
let count = 0;
let dir = 0;
let len = 1;
let chg = 0;
let x = y = 0;
while(count < n){
    for(let j = 1; j <= len; j++){
        if(dir === 0){
            y++;
        } else if(dir === 1){
            x++;
        } else if(dir === 2){
            y--;
        } else{
            x--;
        }
        count++;
        if(count === n) break;
    }
    chg++;
    dir = (dir + 1) % 4;
    if(chg % 2 === 0){
        len++;
    }
}
console.log(`${x} ${y}`);
