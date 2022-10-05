let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = parseInt(input.shift());
let result = [];
for(let i = 0; i < count; i++){
    result.push(input[i].split(" ").map(x => parseInt(x)));
}

result.sort(function(a, b){
    if(a[1] === b[1]){
        return a[0] - b[0];
    } else{
        return a[1] - b[1];
    }
});

console.log(result.map(x => x.join(' ')).join('\n'));