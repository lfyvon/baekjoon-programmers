const N = Number(require('fs').readFileSync('/dev/stdin').toString());
let result = [N];
for(let i = 0; i < N; i++){
    const arr = [N, N - i];
    while(true){
        const num = arr[arr.length - 2] - arr[arr.length - 1];
        if(num < 0) break;
        arr.push(num);
    }
    if(result.length < arr.length) result = arr;
}
console.log(result.length);
console.log(result.join(" "));