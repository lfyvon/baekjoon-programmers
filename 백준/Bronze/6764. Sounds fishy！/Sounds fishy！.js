const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = 'No Fish';
if(input[0] < input[1] && input[1] < input[2] && input[2] < input[3]) result = 'Fish Rising';
if(input[0] > input[1] && input[1] > input[2] && input[2] > input[3]) result = 'Fish Diving';
if(input[0] === input[1] && input[1] === input[2] && input[2] === input[3]) result = 'Fish At Constant Depth';
console.log(result);