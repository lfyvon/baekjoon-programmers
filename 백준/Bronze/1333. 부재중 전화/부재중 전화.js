const fs = require('fs');
const [N, L, D] = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split(" ").map(Number);
let time = 0;
let bt = D;

for(let i = 1; i <= N; i++){
    time += L;
    while(time > bt) bt += D;
    if(bt >= time && bt < time + 5){
        break;
    }
    time += 5;
}
console.log(bt)