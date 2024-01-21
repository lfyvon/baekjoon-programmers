const N = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 1;
while(true){
    let check = 0;
    for(let i = 0; i < 5; i++){
        if(count % N[i] === 0) check++;
    }
    if(check >= 3) break;
    count++;
}
console.log(count);