const fs = require('fs');
const N = Number(fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim());
const C = new Array(51).fill(0);
C[0] = C[1] = 1;
if(N < 2){
    console.log(1);
} else{
    for(let i = 2; i <= N; i++){
        C[i] = (C[i - 1] + C[i - 2] + 1) % 1000000007 ;
    }
    console.log(C[N]);
}