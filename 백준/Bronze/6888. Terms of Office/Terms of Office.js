let [X, Y] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
while(X <= Y){
    result.push("All positions change in year " + X);
    X += 60;
}
console.log(result.join("\n"));