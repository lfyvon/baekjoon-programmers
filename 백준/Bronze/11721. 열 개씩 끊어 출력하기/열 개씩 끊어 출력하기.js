let input = require('fs').readFileSync('/dev/stdin').toString();
let result = [];
while(input.length){
    result.push(input.slice(0, 10));
    input = input.slice(10);
}
console.log(result.join('\n'));