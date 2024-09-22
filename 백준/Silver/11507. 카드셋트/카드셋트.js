const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
const set = new Set();
let check = true;
let count = {
    "P" : 13,
    "K" : 13,
    "H" : 13,
    "T" : 13
};
for(let i = 0; i < input.length; i += 3){
    let str = input.slice(i, i + 3);
    if(set.has(str)){
        check = false;
        break;
    }else {
        set.add(str);
        count[str[0]]--;
    }
}
console.log(check ? Object.values(count).join(" ") : "GRESKA");