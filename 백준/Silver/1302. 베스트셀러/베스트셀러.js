const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const n = Number(input[0]);
const map = new Map();
for(let i = 1; i <= n; i++){
    if(map.has(input[i])){
        map.set(input[i], map.get(input[i]) + 1);
    } else{
        map.set(input[i], 1);
    }
}

const result = [...map].sort((a, b) =>{
    if(a[1] === b[1]){
        return a[0].localeCompare(b[0]);
    } else{
        return b[1] - a[1];
    }
});
console.log(result[0][0]);