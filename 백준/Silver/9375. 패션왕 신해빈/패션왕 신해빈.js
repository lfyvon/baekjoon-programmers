const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);
const list = input.slice(1).map(el => el.split(' ').map(el => el.trim()));
let result = [];
let i = 0;
while(n--){
    let costume = new Map();
    let num = Number(list[i]);
    for(let j = i + 1; j <= i + num; j++){
        const [name, type] = list[j];
        if(costume.has(type)){
            costume.set(type, costume.get(type) + 1);
        } else{
            costume.set(type, 1);
        }
    }
    let count = 1;
    for(let x of costume.values()){
        count *= (x + 1);
    }
    result.push(count - 1);
    i += num + 1;
}

console.log(result.join("\n"));