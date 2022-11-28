const x = parseInt(require('fs').readFileSync('/dev/stdin').toString());

let f = x;
let count = 0;
let n = 0;
let d = 0;
while(f > 0){
    if(f > count){
        f -= count;
        count++;
    } else{
        break;
    }
}

if(count % 2 == 0){
    n = f;
    d = count + 1 - n;
} else{
    d = f;
    n = count + 1 - f;
}

console.log(n + "/"+ d);