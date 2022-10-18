let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for(let i = 0; i < croatia.length; i++){
    input = input.split(croatia[i]).join(' ');
}

console.log(input.length);