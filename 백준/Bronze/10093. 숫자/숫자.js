let [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => BigInt(el));
if(A > B) [A, B] = [B, A];
const result = [];
const dif = B === A ? 0n : B - A - 1n;
console.log(dif.toString());
A++;
while(A < B){
    result.push(A++);
}
if(dif > 0) console.log(result.join(" "));