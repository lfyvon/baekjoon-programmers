const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const balls = input[1];

const check = (str, ball) => {
    let check = false;
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === ball){
            check = true;
        }
        if(check && str[i] !== ball){
            count++;
        }
    }
    return count;
}
let result = Math.min(check(balls, 'R'), check(balls, 'B'), check(balls.split('').reverse().join(''), 'R'), check(balls.split('').reverse().join(''), 'B'));
console.log(result);