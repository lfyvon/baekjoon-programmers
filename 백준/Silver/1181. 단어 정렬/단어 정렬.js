let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = parseInt(input[0]);
let set = [];
let result = [];

for(let i = 1; i <= num; i++){
    set.push(input[i]);
}

set.sort();
result = [...new Set(set)];
result.sort(function(a, b){
    return a.length - b.length;
});
console.log(result.join('\n'));