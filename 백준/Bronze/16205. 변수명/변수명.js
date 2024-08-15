const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const N = Number(input[0]);
let str = input[1];
let sArr = [];
if(N === 2){
    sArr = str.split("_");
} else {
    let s = "";
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === str[i]){
            sArr.push(s);
            s = "";
        }
        s += str[i];
    }
    sArr.push(s);
}
sArr = sArr.filter(el => el);
console.log(sArr.map((el, i) => {
    if(!i){
        return el[0].toLowerCase() + el.slice(1);
    } else {
        return el[0].toUpperCase() + el.slice(1);
    }
}).join(""));
console.log(sArr.map(el => el[0].toLowerCase() + el.slice(1)).join("_"));
console.log(sArr.map(el => el[0].toUpperCase() + el.slice(1)).join(""));