const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let num = input;
let sum = 0;
let count = 0;
while(true){
    count++;

    let a = Math.floor(num / 10);
    let b = num % 10;

    sum = a + b;
    num = b * 10 + sum % 10;
    if(input === num) break;
}

console.log(count);