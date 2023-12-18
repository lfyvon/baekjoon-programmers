const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = input.length;
const result = [];
for(let i = 0; i < N; i++){
    if(input[i] === '') continue;
    const arr = input[i].split("");
    const len = arr.length;
    const count = [0, 0, 0, 0];

    for(let j = 0; j < len; j++){
        if(arr[j] >= 'a' && arr[j] <= 'z'){
            count[0]++;
        } else if(arr[j] >= 'A' && arr[j] <= 'Z'){
            count[1]++;
        } else if(arr[j] >= '0' && arr[j] <= '9'){
            count[2]++;
        } else if(arr[j] === " "){
            count[3]++;
        }
    }
    result.push(count.join(" "));
}
console.log(result.join("\n"));