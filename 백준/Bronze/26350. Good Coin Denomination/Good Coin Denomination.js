const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const result = [];
for(let i = 1; i <= N; i++){
    const [num, ...coins] = input[i].split(" ").map(Number);
    let check = true;
    for(let j = 1; j <= num; j++){
        if(coins[j - 1] * 2 > coins[j]){
            check = false;
            break;
        }
    }
    result.push(`Denominations: ${coins.join(" ")}`);
    result.push(`${check ? "Good" : "Bad"} coin denominations!\n`);
}
console.log(result.join("\n").trim());