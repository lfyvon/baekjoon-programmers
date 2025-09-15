const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("\n");
let i = 0;
const result = [];

while(input[i] !== "#"){
    const str = input[i++].trim().split("");
    const N = str.length - 1;
    let count = 0;
    for(let j = 0; j < N; j++){
        if(str[j] === '1') count++;
    }

    if((str[N] === 'e' && count % 2 === 0) || (str[N] === 'o' && count % 2 === 1)){
        str[N] = '0';
    } else{
        str[N] = '1';
    }
    result.push(str.join(""));
}
console.log(result.join("\n"));