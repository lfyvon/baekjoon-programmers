const fs = require('fs');
const X = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("").map(Number);
const N = X.length;
let curSlope = X[1] - X[0];
let result = "ALPSOO";
if(curSlope <= 0 || X[N - 1] >= X[N - 2]) result = 'NON ALPSOO';

for(let i = 1; i < N - 1; i++){
    const nextSlope = X[i + 1] - X[i];

    if(!nextSlope){
        result = 'NON ALPSOO';
        break;
    }

    if(Math.sign(curSlope) === Math.sign(nextSlope) && curSlope !== nextSlope){
        result = 'NON ALPSOO';
        break;
    }
    curSlope = nextSlope;

}

console.log(result);