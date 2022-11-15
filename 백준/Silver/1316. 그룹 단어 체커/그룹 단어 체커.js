const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(input.shift());
let result = 0;

for(let i = 0; i < n; i++){
    const str = input[i].trim().split('');
    let check = true;
    let arr = [];
    for(let j = 0; j < str.length; j++){
        if(arr.includes(str[j])){
            if(arr[arr.length - 1] !== str[j]){
                check = false;
            }
        } else{
            arr.push(str[j])
        }
    }
    if(check) result += 1;
}

console.log(result);