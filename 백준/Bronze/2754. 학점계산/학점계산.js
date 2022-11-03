const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let result = 0.0;
if(input[0] === 'A'){
    result = 4.0;
} else if(input[0] === 'B'){
    result = 3.0;
} else if(input[0] === 'C'){
    result = 2.0;
} else if(input[0] === 'D'){
    result = 1.0;
}

if(input[1] === '+'){
    result += 0.3;
} else if(input[1] === '-'){
    result -= 0.3;
}

console.log(result.toFixed(1));