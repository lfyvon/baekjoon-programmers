let input = require('fs').readFileSync('/dev/stdin').toString().toUpperCase().trim().split('');

let char = [...new Set(input)].sort();
input.sort();
let num = [];
let maxNum = 0;
let dupleCount = 0;
for (i = 0; i < char.length; i++){
    let count = 0;
    for(j = 0; j< input.length; j++){
        if(char[i] === input[j]){
            count += 1;
        }
    }
    num.push(count);
}

maxNum = Math.max(...num);

for(i = 0; i < num.length; i++){
    if(maxNum === num[i]){
        dupleCount++;
    }
}

if(dupleCount > 1){
    console.log('?');
} else{
    console.log(char[num.indexOf(maxNum)]);
}