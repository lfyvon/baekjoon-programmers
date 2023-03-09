let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
for (let i = 1; i <= count; i++){
    let result = "";
    const [num, str] = input[i].split(" ");
    for(let j = 0; j < str.length; j++){
        result+= str[j].repeat(num);
    }
    console.log(result);
}