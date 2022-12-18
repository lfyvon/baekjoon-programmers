const n = 10000;
const checkNum = new Array(n + 1).fill(true);
const result = [];
const d = (n) => {
    let num = n;
    let result = n;
    while(num){
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}

for(let i = 1; i <= n; i++){
    checkNum[d(i)] = false;
}

for(let i = 1; i < n; i++){
    if(checkNum[i]) result.push(i);
}

console.log(result.join('\n'));