const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const str = input[1].split('');
let count = 0;
for(let i = 0; i < n; i++){
    if(str[i] === 'P'){
        for(let j = i - k; j <= i + k; j++){
            if(j >= 0 && j < n && str[j] === 'H'){
                count++;
                str[j] = 'N';
                break;
            }
        }
    }
}
console.log(count);