const wood = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const result = [];
while(true){
    let isSame = true;
    
    for(let i = 0; i < 4; i++){
        if(wood[i] > wood[i + 1]){
            [wood[i], wood[i + 1]] = [wood[i + 1], wood[i]];
            result.push(wood.join(" "));
            isSame = false;
        }
    }
    
    if(isSame) break;
}
console.log(result.join("\n"));