const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
const [J, N] = input[0].split(" ").map(Number);
let result = 0;

for(let i = 1; i <= N; i++){
    let count = 0;
    const S = input[i].trim().split("").map(el => el.codePointAt());
    for(let j = 0; j < S.length; j++){
        if(S[j]>= 65 && S[j] <= 90){
            count += 4;
        } else if((S[j] >= 97 && S[j] <= 122) || (S[j] >= 48 && S[j] <= 57)){
            count += 2;
        } else{
            count++;
        }
    }
    if(count <= J) result++;
}
console.log(result);