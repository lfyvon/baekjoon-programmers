const wood = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const number = [1, 2, 3, 4, 5];
const result = [];
while(true){
    let isSame = true;

    for(let i = 0; i < 5; i++){
        if(number[i] !== wood[i]) isSame = false;
    }

    if(isSame) break;

    for(let i = 0; i < 4; i++){
        if(wood[i] > wood[i + 1]){
            [wood[i], wood[i + 1]] = [wood[i + 1], wood[i]];
            result.push(wood.join(" "));
        }
    }
}
console.log(result.join("\n"));