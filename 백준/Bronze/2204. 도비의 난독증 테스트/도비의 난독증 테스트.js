const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.trim());
let i = 0;
let result = [];
while(true){
    const N = Number(input[i]);
    if(!N) break;
    i++;
    let arr = input.slice(i, i + N).sort((a, b) =>{
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a< b) return -1;
        if (a > b) return 1;
        return 0;
    });
    result.push(arr[0]);
    i += N;
}
console.log(result.join("\n"));