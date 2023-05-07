const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const m = Number(input[1]);
const brokenBtn = new Set(m ? input[2].split(' ') : []);
const curLoc = 100;
let count = Math.abs(n - curLoc);

for(let i = 0; i < 1000000; i++){
    let str = i.toString();
    let check = true;
    for(let j = 0; j < str.length; j++){
        if(brokenBtn.has(str[j])){
            check = false;
            break;
        }
    }
    if(check){
        count = Math.min(count, Math.abs(n - i) + str.length)
    };
}
console.log(count);