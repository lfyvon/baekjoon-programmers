let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseInt(el));

let num1 = input[0];
let num2 = input[1];
let result = [];
while(num1 % num2 !== 0){
    let r = num1 % num2;
    num1 = num2;
    num2 = r;
 } 
 result.push(num2);
 result.push(input[0] * input[1] / num2);

 console.log(result.join('\n'));
