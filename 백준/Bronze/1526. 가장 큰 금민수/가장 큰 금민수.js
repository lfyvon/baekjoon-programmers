let N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
while(N){
    const str = N.toString().split("");
    const check = str.every(el => el === "4" || el === "7");
    if(check){
        console.log(N);
        break;
    }
    N--;
}