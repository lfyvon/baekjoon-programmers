let n = parseInt(require('fs').readFileSync('/dev/stdin').toString());

const result = [];

let i = 2;
while(n !== 1){
    if(n % i === 0){
        n /= i;
        result.push(i);
    }else{
        i++;
    }
}

console.log(result.join('\n'));