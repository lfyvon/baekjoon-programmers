const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
let result = [];
while(input[i] !== '#'){
    const str = input[i].trim();
    let count = str.split(/[aeiou]/gi).length - 1;
    result.push(count);
    i++;
}
console.log(result.join('\n'));