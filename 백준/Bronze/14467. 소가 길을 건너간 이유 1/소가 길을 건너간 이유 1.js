const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const cows = new Array(11).fill("");
let count = 0;
for(let i = 1; i <= N; i++){
    const [cow, loc] = input[i].split(" ").map(Number);
    if(cows[cow] === "") cows[cow] = loc;
    if(cows[cow] !== loc){
        cows[cow] = loc;
        count++;
    }
}
console.log(count);