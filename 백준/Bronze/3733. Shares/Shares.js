const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i = 0; i < input.length; i++){
    const [n, s] = input[i].split(' ').map(el => parseInt(el));
    let num = Math.floor(s / (n + 1))
    if(num > 0){
        result.push(num);
    } else{
        result.push(0);
    }
}

console.log(result.join('\n'));