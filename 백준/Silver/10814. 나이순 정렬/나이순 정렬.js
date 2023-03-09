let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input.shift());
let result = [];
for(let i = 0; i < count; i++){
    result.push(input[i].trim().split(" "));
}
result.sort(function(a, b){
    return parseInt(a[0]) - parseInt(b[0]);
});

console.log(result.map(x => x.join(' ')).join('\n'));