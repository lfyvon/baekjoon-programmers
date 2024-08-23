const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
const list = [1, 0, 0];
for(let i = 0; i < input.length; i++){
    if(input[i] === 'A'){
        [list[0], list[1]] = [list[1], list[0]];
    } else if(input[i] === 'B'){
        [list[1], list[2]] = [list[2], list[1]];
    } else{
        [list[0], list[2]] = [list[2], list[0]];
    }
}
console.log(list.indexOf(1) + 1);