const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const crypto = input[1].split(" ").map(Number);
const plain = input[2].split("").sort();
let str = [];
for(let i = 0; i < N; i++){
    if(crypto[i] === 0) str.push(" ");
    else if(crypto[i] >= 1 && crypto[i] <= 26){
        str.push(String.fromCharCode(crypto[i] + 64));
    } else{
        str.push(String.fromCharCode(crypto[i] + 70));
    }
}
console.log(str.sort().join("") === plain.join("") ? "y" : "n");