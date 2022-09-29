let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const line = parseInt(input[0]);
let roomN = [];

for(let i = 1; i <= line; i++){
    let el = input[i].split(' ').map(el => parseInt(el));
    let H = el[0];
    let N = el[2];
    let floor = "";
    let num = "";

    if(N % H === 0){
        floor += H;
    } else{
        floor += N % H;
    }
    num += Math.ceil(N / H);

    roomN.push(floor+num.padStart(2, '0'));

}

console.log(roomN.join('\n'));